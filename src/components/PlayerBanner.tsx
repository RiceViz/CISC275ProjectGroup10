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
    const [editing, setEditing] = useState<boolean>(false);
    const [playerName, setPlayerName] = useState<string>(player.name);
    const [playerPos, setPlayerPos] = useState<string>(
        posToAbbrev[player.position]
    );

    function getEditable(): boolean {
        return editing && user === "League Manager";
    }

    const [playerRating, setPlayerRating] = useState<number>(player.rating);
    return (
        <div className="PlayerBanner">
            <Container>
                <Row className="align-items-center justify-content-center">
                    {/* Player Name */}
                    <Col sm={5}>
                        <RenderPlayerName
                            editing={getEditable()}
                            playerName={playerName}
                            setPlayerName={setPlayerName}
                        ></RenderPlayerName>
                    </Col>

                    {/* Player Image */}
                    <Col sm={3}>
                        <Image
                            src={player.imageURL}
                            style={{ height: "64px" }}
                        />
                    </Col>
                    <Col sm={4}>
                        {/* Player Position */}
                        <RenderPlayerPosition
                            editing={getEditable()}
                            playerPos={playerPos}
                            setPlayerPos={setPlayerPos}
                        ></RenderPlayerPosition>
                        <br></br>
                        {/* Player Rating */}
                        <RenderPlayerRating
                            editing={getEditable()}
                            playerRating={playerRating}
                            setPlayerRating={setPlayerRating}
                        ></RenderPlayerRating>
                    </Col>

                    {user === "League Manager" && (
                        <RenderEditSwitch
                            editing={editing}
                            setEditing={setEditing}
                        ></RenderEditSwitch>
                    )}
                </Row>
            </Container>
        </div>
    );
}

/**
 *
 * @param editing boolean: is edit mode
 * @param playerName string: playerName Hook
 * @param setPlayerName (boolean) => void: setter for playerName Hook
 * @returns
 */
function RenderPlayerName({
    editing,
    playerName,
    setPlayerName
}: {
    editing: boolean;
    playerName: string;
    setPlayerName: (newName: string) => void;
}): JSX.Element {
    if (editing) {
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
    editing,
    playerPos,
    setPlayerPos
}: {
    editing: boolean;
    playerPos: string;
    setPlayerPos: (newPos: string) => void;
}): JSX.Element {
    if (editing) {
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
    editing,
    playerRating,
    setPlayerRating
}: {
    editing: boolean;
    playerRating: number;
    setPlayerRating: (newRating: number) => void;
}): JSX.Element {
    if (editing) {
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
    editing,
    setEditing
}: {
    editing: boolean;
    setEditing: (isEditing: boolean) => void;
}): JSX.Element {
    return (
        <Col sm={3}>
            <Form.Check
                className=""
                type="switch"
                id="is-editing"
                label="Edit"
                checked={editing}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEditing(event.target.checked)
                }
            />
        </Col>
    );
}
