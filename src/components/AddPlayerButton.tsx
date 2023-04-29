import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Player, abbrevToPos } from "../interfaces/player";
import { Col, Form, Row } from "react-bootstrap";
import { posToAbbrev } from "../interfaces/player";

function makeBlankPlayer(): Player {
    return {
        name: "",
        position: "Defender",
        rating: 0,
        imageURL: "",
        editMode: false
    };
}

export function AddPlayerButton({
    addPlayer
}: {
    addPlayer: (player: Player) => void;
}): JSX.Element {
    const [show, setShow] = useState(false);
    const [player, setPlayer] = useState<Player>(makeBlankPlayer());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modal = (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Add Player</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Input Name */}
                <Form.Group controlId="set-name" as={Row}>
                    <Form.Label column sm="auto">
                        Name:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            value={player.name}
                            onChange={(e) =>
                                setPlayer({
                                    ...player,
                                    name: e.target.value
                                })
                            }
                        />
                    </Col>
                </Form.Group>

                <br></br>

                <Row>
                    {/* Select Position */}
                    <Col>
                        <Form.Group controlId="set-rating" as={Row}>
                            <Form.Label column sm="auto">
                                Rating:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={player.rating}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const clamp = (
                                            num: number,
                                            min: number,
                                            max: number
                                        ) => Math.min(Math.max(num, min), max);
                                        return setPlayer({
                                            ...player,
                                            rating: clamp(
                                                parseInt(event.target.value),
                                                0,
                                                99
                                            )
                                        });
                                    }}
                                />
                            </Col>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="positionsDropdown" as={Row}>
                            <Form.Label column sm="auto">
                                Pos:
                            </Form.Label>
                            <Col>
                                <Form.Select
                                    value={posToAbbrev[player.position]}
                                    onChange={(e) =>
                                        setPlayer({
                                            ...player,
                                            position:
                                                abbrevToPos[e.target.value]
                                        })
                                    }
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
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>

                <br></br>

                <Form.Group controlId="set-name" as={Row}>
                    <Form.Label column sm="auto">
                        Image Url:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="text"
                            value={player.imageURL}
                            onChange={(e) =>
                                setPlayer({
                                    ...player,
                                    imageURL: e.target.value
                                })
                            }
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    className="bg-neutral-500 hover:bg-neutral-600"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    className="bg-blue-500 hover:bg-blue-600"
                    onClick={() => {
                        addPlayer(player);
                        handleClose();
                    }}
                >
                    Add Player
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <div>
            <Button
                variant="primary"
                className="bg-blue-500/80"
                onClick={handleShow}
            >
                Add Player
            </Button>
            {modal}
        </div>
    );
}
