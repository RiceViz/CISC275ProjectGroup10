import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Team } from "../interfaces/team";
import { TeamDropDownButton } from "../components/TeamDropDownButton";
export function PlayScene({
    user,
    allPlayers,
    team,
    teams,
    setYourTeamPlayers,
    setYourTeamPlayers2,
    yourStartingLineUp,
    setYourStartingLineUp,
    yourStartingLineUp2,
    setYourStartingLineUp2
}: {
    user: User;
    allPlayers: Player[];
    team: Team;
    teams: Team[];
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
    const [teamA, setTeamA] = useState<Team>(team);
    const [teamB, setTeamB] = useState<Team>(team);
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
                            <TeamDropDownButton
                                team={teamA}
                                setTeam={setTeamA}
                                teams={teams}
                            ></TeamDropDownButton>
                            <div className="flex justify-center">
                                <Lineup
                                    title={teamA.name + " Players"}
                                    players={teamA.players}
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
                                    title={teamA.name + " Lineup"}
                                    players={teamA.lineup}
                                    setPlayers={setYourStartingLineUp}
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            <TeamDropDownButton
                                team={teamB}
                                setTeam={setTeamB}
                                teams={teams}
                            ></TeamDropDownButton>
                            <div className="flex justify-center">
                                <Lineup
                                    title={teamB.name + " Players"}
                                    players={teamB.players}
                                    setPlayers={setYourTeamPlayers2}
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
                                    title={teamB.name + " Lineup"}
                                    players={teamB.lineup}
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
