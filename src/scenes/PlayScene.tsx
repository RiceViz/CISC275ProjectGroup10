import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../interfaces/user";

export function PlayScene({
    user,
    allPlayers,
    setAllPlayers,
    yourTeamPlayers,
    setYourTeamPlayers,
    yourStartingLineUp,
    setYourStartingLineUp
}: {
    user: User;
    allPlayers: Player[];
    setAllPlayers: (players: Player[]) => void;
    yourTeamPlayers: Player[];
    setYourTeamPlayers: (players: Player[]) => void;
    yourStartingLineUp: Player[];
    setYourStartingLineUp: (players: Player[]) => void;
}): JSX.Element {
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
                                    players={yourTeamPlayers}
                                    setPlayers={setYourTeamPlayers}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropTeam}
                                onDragOver={handleDragOver}
                            >
                                <Lineup
                                    title="Team 1 Lineup"
                                    players={yourStartingLineUp}
                                    setPlayers={setYourStartingLineUp}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropStartingLineup}
                                onDragOver={handleDragOver}
                            >
                                <Lineup
                                    title="Team 2 Lineup"
                                    players={yourStartingLineUp}
                                    setPlayers={setYourStartingLineUp}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="BoxedList"
                                onDrop={handleOnDropStartingLineup}
                                onDragOver={handleDragOver}
                            >
                                <Lineup
                                    title="Team 2 Players"
                                    players={yourTeamPlayers}
                                    setPlayers={setYourTeamPlayers}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br></br>
            </div>
        </>
    );
}
