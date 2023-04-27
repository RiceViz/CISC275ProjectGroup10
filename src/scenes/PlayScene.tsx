import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Row, Col, Container, Button } from "react-bootstrap";
import { User } from "../interfaces/user";

export function PlayScene({ user }: { user: User }): JSX.Element {
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());
    const [yourTeamPlayers, setYourTeamPlayers] = useState<Player[]>([]);
    const [yourStartingLineUp, setYourStartingLineUp] = useState<Player[]>([]);

    function handleOnDropTeam(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };

        // add the player to the list
        if (newPlayer !== undefined) {
            setYourTeamPlayers([...yourTeamPlayers, newPlayer]);
        }
    }

    function handleOnDropStartingLineup(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };

        // add the player to the list
        if (newPlayer !== undefined) {
            setYourStartingLineUp([...yourStartingLineUp, newPlayer]);
        }
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Team 1 Players
                            <div className="BoxedList">
                                <Lineup
                                    title="Team 1 Players"
                                    players={allPlayers}
                                    setPlayers={setAllPlayers}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            Team 1 Lineup
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropTeam}
                                onDragOver={handleDragOver}
                            >
                                <Lineup
                                    title="Team 1 Lineup"
                                    players={allPlayers}
                                    setPlayers={setAllPlayers}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            Team 2 Lineup
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropStartingLineup}
                                onDragOver={handleDragOver}
                            >
                                <Lineup
                                    title="Team 2 Lineup"
                                    players={allPlayers}
                                    setPlayers={setAllPlayers}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            Team 2 Players
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropStartingLineup}
                                onDragOver={handleDragOver}
                            >
                                <Lineup
                                    title="Team 2 Players"
                                    players={allPlayers}
                                    setPlayers={setAllPlayers}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Button
                    className="text-2xl text-center dark:text-white"
                    // onClick={simulateGame}
                >
                    Simulate Game
                </Button>
            </div>
        </>
    );
}
