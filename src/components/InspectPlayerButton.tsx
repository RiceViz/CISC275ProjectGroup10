import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Player } from "../interfaces/player";

export function InspectPlayerButton({
    player,
    setPlayer,
    setPlayers
}: {
    player: Player;
    setPlayer: (player: Player) => void;
    setPlayers: (players: Player[]) => void;
}): JSX.Element {
    const [show, setShow] = useState(false);
    const [editmode, seteditmode] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modal = (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>{player.name}</Modal.Header>
            <Modal.Body>
                <Row className="flex justify-center">
                    {/* Name Header */}
                    <Col style={{ justifyContent: "center" }}>
                        <div>Rating: {player.rating}</div>
                        <br />
                        <div>Position: {player.position}</div>
                        <br />
                        <div>Age: {player.age}</div>
                        <br />
                        <div>Height: {player.height}</div>
                        <br />
                        <ul>
                            Team History:
                            {player.teamHistory.map((team: string) => (
                                <li key={team}>
                                    {team}{" "}
                                    {editmode && (
                                        <span>
                                            <Button
                                                variant="secondary"
                                                className="bg-red-600/80 hover:bg-red-600/100"
                                                onClick={() =>
                                                    seteditmode(!editmode)
                                                }
                                            >
                                                Remove Team
                                            </Button>
                                        </span>
                                    )}
                                </li>
                            ))}
                            {editmode}
                        </ul>
                    </Col>
                    <Col>
                        <img
                            src={player.imageURL}
                            alt={player.imageURL}
                            style={{ maxHeight: "40vh", width: "auto" }}
                        />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    className="bg-blue-600/80 hover:bg-blue-600/100"
                    onClick={() => seteditmode(!editmode)}
                >
                    {editmode ? "Save Player" : "Edit Player"}
                </Button>
                <Button
                    variant="secondary"
                    className="bg-red-600/80 hover:bg-red-600/100"
                    onClick={() => seteditmode(!editmode)}
                >
                    Delete Player
                </Button>
                <Button
                    variant="secondary"
                    className="bg-neutral-500 hover:bg-neutral-600"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <div>
            <Button
                variant="primary"
                className="bg-blue-600/80 hover:bg-blue-600/100"
                onClick={handleShow}
            >
                Inspect Player
            </Button>
            {modal}
        </div>
    );
}
