import React from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Team } from "../interfaces/team";
export function PlayScene({
    user,
    allPlayers,
    team,
    yourTeamPlayers,
    setYourTeamPlayers,
    yourTeamPlayers2,
    yourStartingLineUp,
    setYourStartingLineUp,
    yourStartingLineUp2,
    setYourStartingLineUp2
}: {
    user: User;
    allPlayers: Player[];
    team: Team;
    setAllPlayers: (players: Player[]) => void;
    yourTeamPlayers: Player[];
    setYourTeamPlayers: (players: Player[]) => void;
    yourTeamPlayers2: Player[];
    setYourTeamPlayers2: (players: Player[]) => void;
    yourStartingLineUp: Player[];
    setYourStartingLineUp: (players: Player[]) => void;
    yourStartingLineUp2: Player[];
    setYourStartingLineUp2: (players: Player[]) => void;
}): JSX.Element {
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
            if (yourStartingLineUp.length < 11) {
                setYourStartingLineUp([...yourStartingLineUp, newPlayer]);
            }
        }
    }

    function handleOnDropStartingLineup2(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };

        // add the player to the list
        if (newPlayer !== undefined) {
            if (yourStartingLineUp2.length < 11) {
                setYourStartingLineUp2([...yourStartingLineUp2, newPlayer]);
            }
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
                            <div className="flex justify-center">
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
                                className="flex justify-center"
                                onDrop={handleOnDropStartingLineup}
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
                            <div className="flex justify-center">
                                <Lineup
                                    title="Team 2 Players"
                                    players={yourTeamPlayers2}
                                    setPlayers={setYourStartingLineUp2}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            <div
                                className="flex justify-center"
                                onDrop={handleOnDropStartingLineup2}
                                onDragOver={handleDragOver}
                            >
                                <Lineup
                                    title="Team 2 Lineup"
                                    players={yourStartingLineUp2}
                                    setPlayers={setYourStartingLineUp2}
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
