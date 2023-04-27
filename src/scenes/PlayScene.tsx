import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../interfaces/user";
import { YourTeamLineUp } from "../components/YourTeamLineUp";
import { StartingLineUp } from "../components/StartingLineUp";

export function PlayScene({ user }: { user: User }): JSX.Element {
    const allPlayers: Player[] = PlayerCreator();
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
                            <div className="BoxedList">
                                Team 1 Players
                                <Lineup
                                    title="Team 1 Players"
                                    lineup={yourTeamPlayers}
                                    user={user}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropTeam}
                                onDragOver={handleDragOver}
                            >
                                Team 1 Lineup
                                <YourTeamLineUp
                                    lineup={yourStartingLineUp}
                                    user={user}
                                ></YourTeamLineUp>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropStartingLineup}
                                onDragOver={handleDragOver}
                            >
                                Team 2 Lineup
                                <StartingLineUp
                                    lineup={yourStartingLineUp}
                                    user={user}
                                ></StartingLineUp>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropStartingLineup}
                                onDragOver={handleDragOver}
                            >
                                Team 2 Players
                                <StartingLineUp
                                    lineup={yourTeamPlayers}
                                    user={user}
                                ></StartingLineUp>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
