import React, { useState } from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { posToAbbrev } from "../interfaces/player";
import { User } from "../interfaces/user";
import { Team } from "../interfaces/team";

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
    onDragStart,
    onDragOver,
    onDrop
}: {
    player: Player;
    user: User;
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [playerName, setPlayerName] = useState<string>(player.name);
    const [playerPos, setPlayerPos] = useState<string>(
        posToAbbrev[player.position]
    );
    const [playerRating, setPlayerRating] = useState<number>(player.rating);
    return (
        <div
            className="PlayerBanner"
            draggable={true}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
        >
            <Container>
                <Row className="align-items-center justify-content-center">
                    {/* Player Name */}
                    <Col sm={5}>
                        {editing ? (
                            <Form.Control
                                type="text"
                                value={playerName}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setPlayerName(event.target.value)}
                            />
                        ) : (
                            playerName
                        )}
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
                        Pos:{" "}
                        {editing ? (
                            <Form.Group controlId="positionsDropdown">
                                <Form.Select
                                    value={playerPos}
                                    onChange={(e) =>
                                        setPlayerPos(e.target.value)
                                    }
                                >
                                    {["F", "D", "G", "M"].map(
                                        (o: string): JSX.Element => (
                                            <option key={o} value={o}>
                                                {o}
                                            </option>
                                        )
                                    )}
                                </Form.Select>
                            </Form.Group>
                        ) : (
                            playerPos
                        )}
                        <br></br>
                        {/* Player Rating */}
                        Ovr:{" "}
                        {editing ? (
                            <Form.Control
                                type="number"
                                value={playerRating}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    const clamp = (
                                        num: number,
                                        min: number,
                                        max: number
                                    ) => Math.min(Math.max(num, min), max);
                                    return setPlayerRating(
                                        clamp(
                                            parseInt(event.target.value),
                                            0,
                                            99
                                        )
                                    );
                                }}
                            />
                        ) : (
                            playerRating
                        )}
                    </Col>

                    {user === "League Manager" ? (
                        <Col sm={3}>
                            <Form.Check
                                className=""
                                type="switch"
                                id="is-editing"
                                label="Edit"
                                checked={editing}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setEditing(event.target.checked)}
                            />
                        </Col>
                    ) : (
                        <Col></Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}
