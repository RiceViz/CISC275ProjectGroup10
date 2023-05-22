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
    teams,
    setTeams
}: {
    user: User;
    allPlayers: Player[];
    teams: Team[];
    setTeams: (teams: Team[]) => void;
}): JSX.Element {
    const [teamNumA, setTeamNumA] = useState<number>(0);
    const [teamNumB, setTeamNumB] = useState<number>(0);

    const teamA = teams[teamNumA];
    const teamB = teams[teamNumB];

    function setTeamLineUp(teamNumber: number, newLineup: Player[]) {
        const tmpteams = [...teams];
        const newTeam: Team = {
            ...tmpteams[teamNumber],
            lineup: newLineup
        };
        tmpteams.splice(teamNumber, 1, newTeam);
        setTeams(tmpteams);
    }

    function setTeamPlayers(teamNumber: number, newPlayers: Player[]) {
        const tmpteams = [...teams];
        const newTeam: Team = {
            ...tmpteams[teamNumber],
            players: newPlayers
        };
        tmpteams.splice(teamNumber, 1, newTeam);
        setTeams(tmpteams);
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
            if (teams[teamNumA].lineup.length < 11) {
                setTeamLineUp(teamNumA, [...teams[teamNumA].lineup, newPlayer]);
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
            if (teams[teamNumB].lineup.length < 11) {
                setTeamLineUp(teamNumB, [...teams[teamNumB].lineup, newPlayer]);
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
                                team={teams[teamNumA]}
                                setTeamNum={setTeamNumA}
                                teams={teams}
                            ></TeamDropDownButton>
                            <div className="flex justify-center">
                                <Lineup
                                    title={teamA.name + " Players"}
                                    players={teamA.players}
                                    setPlayers={(newPlayers: Player[]) =>
                                        setTeamPlayers(teamNumA, newPlayers)
                                    }
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
                                    setPlayers={(newLineup: Player[]) =>
                                        setTeamPlayers(teamNumA, newLineup)
                                    }
                                    user={user}
                                    playersEditable={false}
                                ></Lineup>
                            </div>
                        </Col>
                        <Col>
                            <TeamDropDownButton
                                team={teamB}
                                setTeamNum={setTeamNumB}
                                teams={teams}
                            ></TeamDropDownButton>
                            <div className="flex justify-center">
                                <Lineup
                                    title={teamB.name + " Players"}
                                    players={teamB.players}
                                    setPlayers={(newPlayers: Player[]) =>
                                        setTeamPlayers(teamNumB, newPlayers)
                                    }
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
                                    setPlayers={(newLineup: Player[]) =>
                                        setTeamPlayers(teamNumB, newLineup)
                                    }
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
