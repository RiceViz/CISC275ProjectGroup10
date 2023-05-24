import React, { useState } from "react";
import "../App.css";
import { Player, Position, abbrevToPos } from "../interfaces/player";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { posToAbbrev } from "../interfaces/player";
import { User } from "../interfaces/user";
import { InspectPlayerButton } from "./InspectPlayerButton";

/**
 * Makes a condensed, editable player card
 *
 * @param Player
 * @param User
 * @returns JSX.Element
 */
export default function PlayerBanner({
    player,
    setPlayer,
    removePlayer,
    user,
    isPlayerEditable
}: {
    player: Player;
    setPlayer: (player: Player) => void;
    removePlayer: () => void;
    user: User;
    index: number;
    isPlayerEditable: boolean;
}): JSX.Element {
    const editable: boolean =
        player.editMode && isPlayerEditable && user === "League Manager";

    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    return (
        <div
            className="cursor-pointer p-2 m-2 w-[300px] rounded-lg shadow-md bg-neutral-200 dark:bg-neutral-700 hover:brightness-75 transition-all duration-300"
            draggable
            onDragStart={(e) => handleOnDrag(e, player.name)}
        >
            <Container>
                <InspectPlayerButton
                    player={player}
                    setPlayer={setPlayer}
                    removePlayer={removePlayer}
                ></InspectPlayerButton>
                <Row className="align-items-center justify-content-center">
                    {/* Column 1 */}
                    <Col sm={5}>
                        {/* Player Name */}
                        <RenderPlayerName
                            editMode={editable}
                            playerName={player.name}
                            setPlayerName={(newName: string) =>
                                setPlayer({ ...player, name: newName })
                            }
                        ></RenderPlayerName>
                    </Col>

                    {/* Column 2 */}
                    <Col sm={3}>
                        {/* Player Image */}
                        <Image
                            src={player.imageURL}
                            style={{ width: "64px", height: "64px" }}
                        />
                    </Col>

                    {/* Column 3 */}
                    <Col sm={4}>
                        {/* Player Position */}
                        <RenderPlayerPosition
                            editMode={editable}
                            playerPos={posToAbbrev[player.position]}
                            setPlayerPos={(newPos: Position) =>
                                setPlayer({ ...player, position: newPos })
                            }
                        ></RenderPlayerPosition>
                        {editable || <br></br>}

                        {/* Player Rating */}
                        <RenderPlayerRating
                            editMode={editable}
                            playerRating={player.rating}
                            setPlayerRating={(newRating: number) =>
                                setPlayer({ ...player, rating: newRating })
                            }
                        ></RenderPlayerRating>
                    </Col>

                    {/* Edit Switch */}
                    {user === "League Manager" && isPlayerEditable && (
                        <RenderEditSwitch
                            editMode={player.editMode}
                            setEditMode={(isEditMode: boolean) =>
                                setPlayer({ ...player, editMode: isEditMode })
                            }
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
export function RenderPlayerName({
    editMode,
    playerName,
    setPlayerName
}: {
    editMode: boolean;
    playerName: string;
    setPlayerName: (newName: string) => void;
}): JSX.Element {
    const [tempName, setTempName] = useState<string>(playerName);
    if (editMode) {
        return (
            <Form.Control
                type="text"
                value={tempName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setTempName(event.target.value)
                }
                onBlur={() => setPlayerName(tempName)}
            />
        );
    } else {
        return <>{playerName}</>;
    }
}

export function RenderPlayerPosition({
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
                <Form.Label>Pos: </Form.Label>
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

export function RenderPlayerRating({
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

export function RenderEditSwitch({
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
