import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../interfaces/user";
import { YourTeamLineUp } from "../components/YourTeamLineUp";
import { StartingLineUp } from "../components/StartingLineUp";

export function MainScene({ user }: { user: User }): JSX.Element {
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
                        <Col className="p-2">
                            All Players
                            <div className="BoxedList">
                                <Lineup
                                    lineup={allPlayers}
                                    user={user}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col className="p-2">
                            Your Team
                            <div
                                className="BoxedList max-h-[200px]"
                                onDrop={handleOnDropTeam}
                                onDragOver={handleDragOver}
                            >
                                Your Players
                                <YourTeamLineUp
                                    lineup={yourTeamPlayers}
                                    user={user}
                                ></YourTeamLineUp>
                            </div>
                        </Col>
                        <Col className="p-2">
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropStartingLineup}
                                onDragOver={handleDragOver}
                            >
                                Starting Lineup
                                <StartingLineUp
                                    lineup={yourStartingLineUp}
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
