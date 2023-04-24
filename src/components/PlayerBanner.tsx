import React, { useState } from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { posToAbbrev } from "../interfaces/player";
import { User } from "../interfaces/user";

/**
 * Makes a condensed, editable player card
 *
 * @param Player
 * @param User
 * @returns JSX.Element
 */
export function PlayerBanner({
    player,
    user
}: {
    player: Player;
    user: User;
}): JSX.Element {
    const [editMode, seteditMode] = useState<boolean>(false);
    const [playerName, setPlayerName] = useState<string>(player.name);
    const [playerPos, setPlayerPos] = useState<string>(
        posToAbbrev[player.position]
    );

    const editable: boolean = editMode && user === "League Manager";

    const [playerRating, setPlayerRating] = useState<number>(player.rating);
    return (
        <div className="PlayerBanner">
            <Container>
                <Row className="align-items-center justify-content-center">
                    {/* Column 1 */}
                    <Col sm={5}>
                        {/* Player Name */}
                        <RenderPlayerName
                            editMode={editable}
                            playerName={playerName}
                            setPlayerName={setPlayerName}
                        ></RenderPlayerName>
                    </Col>

                    {/* Column 2 */}
                    <Col sm={3}>
                        {/* Player Image */}
                        <Image
                            src={player.imageURL}
                            style={{ height: "64px" }}
                        />
                    </Col>

                    {/* Column 3 */}
                    <Col sm={4}>
                        {/* Player Position */}
                        <RenderPlayerPosition
                            editMode={editable}
                            playerPos={playerPos}
                            setPlayerPos={setPlayerPos}
                        ></RenderPlayerPosition>
                        {editable || <br></br>}

                        {/* Player Rating */}
                        <RenderPlayerRating
                            editMode={editable}
                            playerRating={playerRating}
                            setPlayerRating={setPlayerRating}
                        ></RenderPlayerRating>
                    </Col>

                    {/* Edit Switch */}
                    {user === "League Manager" && (
                        <RenderEditSwitch
                            editMode={editMode}
                            seteditMode={seteditMode}
                        ></RenderEditSwitch>
                    )}
                </Row>
            </Container>
        </div>
    );
}

/**
 *
 * @param editMode boolean: is edit mode
 * @param playerName string: playerName Hook
 * @param setPlayerName (boolean) => void: setter for playerName Hook
 * @returns
 */
function RenderPlayerName({
    editMode,
    playerName,
    setPlayerName
}: {
    editMode: boolean;
    playerName: string;
    setPlayerName: (newName: string) => void;
}): JSX.Element {
    if (editMode) {
        return (
            <Form.Control
                type="text"
                value={playerName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPlayerName(event.target.value)
                }
            />
        );
    } else {
        return <>{playerName}</>;
    }
}

function RenderPlayerPosition({
    editMode,
    playerPos,
    setPlayerPos
}: {
    editMode: boolean;
    playerPos: string;
    setPlayerPos: (newPos: string) => void;
}): JSX.Element {
    if (editMode) {
        return (
            <Form.Group controlId="positionsDropdown">
                Pos:{" "}
                <Form.Select
                    value={playerPos}
                    onChange={(e) => setPlayerPos(e.target.value)}
                >
                    {["F", "D", "G", "M"].map((o: string): JSX.Element => {
                        return (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
        );
    } else {
        return <>Pos: {playerPos}</>;
    }
}

function RenderPlayerRating({
    editMode,
    playerRating,
    setPlayerRating
}: {
    editMode: boolean;
    playerRating: number;
    setPlayerRating: (newRating: number) => void;
}): JSX.Element {
    if (editMode) {
        return (
            <div>
                Ovr:{" "}
                <Form.Control
                    type="number"
                    value={playerRating}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const clamp = (num: number, min: number, max: number) =>
                            Math.min(Math.max(num, min), max);
                        return setPlayerRating(
                            clamp(parseInt(event.target.value), 0, 99)
                        );
                    }}
                />
            </div>
        );
    } else {
        return <>Ovr: {playerRating}</>;
    }
}

function RenderEditSwitch({
    editMode,
    seteditMode
}: {
    editMode: boolean;
    seteditMode: (iseditMode: boolean) => void;
}): JSX.Element {
    return (
        <Col sm={3}>
            <Form.Check
                className=""
                type="switch"
                id="is-editMode"
                label="Edit"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    seteditMode(event.target.checked)
                }
            />
        </Col>
    );
}
