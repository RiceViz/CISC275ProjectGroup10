import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Form, Row } from "react-bootstrap";
import { Team } from "../interfaces/team";

function makeNewTeam(): Team {
    return {
        name: "",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };
}

export function AddTeamButton({
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
                <Modal.Title>Add User</Modal.Title>
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
                <Row>
                    {/* Select Position */}
                    <Col>
                        <Form.Group controlId="set-rating" as={Row}>
                            <Form.Label column sm="auto">
                                Wins:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={team.wins}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const clamp = (
                                            num: number,
                                            min: number,
                                            max: number
                                        ) => Math.min(Math.max(num, min), max);
                                        return setTeam({
                                            ...team,
                                            wins: clamp(
                                                parseInt(event.target.value),
                                                0,
                                                Infinity
                                            )
                                        });
                                    }}
                                />
                            </Col>
                        </Form.Group>
                    </Col>

                    {/* Select Losses */}
                    <Col>
                        <Form.Group controlId="set-rating" as={Row}>
                            <Form.Label column sm="auto">
                                Losses:
                            </Form.Label>
                            <Col>
                                <Form.Control
                                    type="number"
                                    value={team.losses}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const clamp = (
                                            num: number,
                                            min: number,
                                            max: number
                                        ) => Math.min(Math.max(num, min), max);
                                        return setTeam({
                                            ...team,
                                            losses: clamp(
                                                parseInt(event.target.value),
                                                0,
                                                Infinity
                                            )
                                        });
                                    }}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <br></br>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    className="bg-neutral-500 hover:bg-neutral-600 font-bold py-2 px-4 rounded-full"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    name="Add Team"
                    id="innner"
                    variant="primary"
                    className="bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-full"
                    onClick={() => {
                        const newTeam: Team = {
                            ...team
                        };
                        addTeam(newTeam);
                        handleClose();
                    }}
                >
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <div className="button">
            <Button
                variant="primary"
                className="flex justify-between p- hover:border-transparent rounded bg-blue-500 hover:bg-blue-600"
                onClick={handleShow}
            >
                Add User
            </Button>
            {modal}
        </div>
    );
}
