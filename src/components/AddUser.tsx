import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, Row } from "react-bootstrap";
import { getPath } from "./PlayerCreator";
import { Team, abbrevToUser, userToAbbrev } from "../interfaces/team";

function makeNewTeam(): Team {
    return {
        name: "",
        user: "LeagueManager",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };
}

export function AddUserButton({
    addTeam
}: {
    addTeam: (team: Team) => void;
}): JSX.Element {
    const [show, setShow] = useState(false);
    const [team, setTeam] = useState<Team>(makeNewTeam());
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setTeam(makeNewTeam());
        setShow(true);
    };

    const modal = (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Add Team</Modal.Title>
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
                            value={team.name}
                            onChange={(e) =>
                                setTeam({
                                    ...team,
                                    name: e.target.value
                                })
                            }
                        />
                    </Col>
                </Form.Group>

                <br></br>

                <Col>
                    <Form.Group controlId="positionsDropdown" as={Row}>
                        <Form.Label column sm="auto">
                            User Type:
                        </Form.Label>
                        <Col>
                            <Form.Select
                                value={userToAbbrev[team.user]}
                                onChange={(e) =>
                                    setTeam({
                                        ...team,
                                        user: abbrevToUser[e.target.value]
                                    })
                                }
                            >
                                {["LM", "TM", "C"].map(
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

                <br></br>
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
                        const newTeam: Team = {
                            ...team
                        };
                        addTeam(newTeam);
                        handleClose();
                    }}
                >
                    Add User/Team
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <div>
            <Button
                variant="primary"
                className="flex justify-between p-"
                onClick={handleShow}
            >
                Add User/Team
            </Button>
            {modal}
        </div>
    );
}
