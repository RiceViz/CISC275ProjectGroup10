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
    const [playerRating, setPlayerRating] = useState<number>(player.rating);

    function RenderPlayerName(): JSX.Element {
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
            return <p>playerName</p>;
        }
    }

    function RenderPosNRating(): JSX.Element {
        if (editing) {
            return (
                <div>
                    {/* Rendering Position */}
                    Pos:
                    <Form.Group controlId="positionsDropdown">
                        <Form.Select
                            value={playerPos}
                            onChange={(e) => setPlayerPos(e.target.value)}
                        >
                            {["F", "D", "G", "M"].map(
                                (o: string): JSX.Element => {
                                    return (
                                        <option key={o} value={o}>
                                            {o}
                                        </option>
                                    );
                                }
                            )}
                        </Form.Select>
                    </Form.Group>
                    <br></br>
                    {/* Rendering Rank */}
                    Ovr:{" "}
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
                                clamp(parseInt(event.target.value), 0, 99)
                            );
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <p>Pos: {playerPos}</p>
                    <p>Ovr: {playerRating}</p>
                </div>
            );
        }
    }

    function RenderEditSwitch(): JSX.Element {
        if (user === "League Manager") {
            return (
                <div>
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
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    return (
        <div className="PlayerBanner">
            <Container>
                <Row className="align-items-center justify-content-center">
                    {/* Player Name */}
                    <Col sm={5}>
                        <RenderPlayerName></RenderPlayerName>
                    </Col>

                    {/* Player Image */}
                    <Col sm={3}>
                        <Image
                            src={player.imageURL}
                            style={{ height: "64px" }}
                        />
                    </Col>
                    <Col sm={4}>
                        {/* Player Position and Rating*/}
                        <RenderPosNRating></RenderPosNRating>
                    </Col>
                    <RenderEditSwitch></RenderEditSwitch>
                </Row>
            </Container>
        </div>
    );
}
