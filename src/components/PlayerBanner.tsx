import React, { useState } from "react";
import "../App.css";
import { Player, Position, abbrevToPos } from "../interfaces/player";
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
    user,
    isPlayerEditable
}: {
    player: Player;
    user: User;
    isPlayerEditable: boolean;
}): JSX.Element {
    const [p, setPlayer] = useState<Player>(player);

    const [editMode, setEditMode] = useState<boolean>(false);

    const editable: boolean =
        editMode && isPlayerEditable && user === "League Manager";

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    return (
        <div
            className="PlayerBanner"
            draggable
            onDragStart={(e) => handleOnDrag(e, player.name)}
        >
            <Container>
                <Row className="align-items-center justify-content-center">
                    {/* Column 1 */}
                    <Col sm={5}>
                        {/* Player Name */}
                        <RenderPlayerName
                            editMode={editable}
                            playerName={p.name}
                            setPlayerName={(newName: string) =>
                                setPlayer({ ...p, name: newName })
                            }
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
                            playerPos={posToAbbrev[p.position]}
                            setPlayerPos={(newPos: Position) =>
                                setPlayer({ ...p, position: newPos })
                            }
                        ></RenderPlayerPosition>
                        {editable || <br></br>}

                        {/* Player Rating */}
                        <RenderPlayerRating
                            editMode={editable}
                            playerRating={p.rating}
                            setPlayerRating={(newRating: number) =>
                                setPlayer({ ...p, rating: newRating })
                            }
                        ></RenderPlayerRating>
                    </Col>

                    {/* Edit Switch */}
                    {user === "League Manager" && (
                        <RenderEditSwitch
                            editMode={editMode}
                            setEditMode={setEditMode}
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
    setPlayerPos: (newPos: Position) => void;
}): JSX.Element {
    if (editMode) {
        return (
            <Form.Group controlId="positionsDropdown">
                Pos:{" "}
                <Form.Select
                    value={playerPos}
                    onChange={(e) => setPlayerPos(abbrevToPos[e.target.value])}
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
    setEditMode
}: {
    editMode: boolean;
    setEditMode: (iseditMode: boolean) => void;
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
                    setEditMode(event.target.checked)
                }
            />
        </Col>
    );
}
