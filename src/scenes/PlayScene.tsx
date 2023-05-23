import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { Row, Col, Container, Button } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Team } from "../interfaces/team";
import { TeamDropDownButton } from "../components/TeamDropDownButton";
import { WinFormula } from "../components/WinFormula";
export function PlayScene({
    user,
    allPlayers,
    team,
    teams,
    setYourTeamPlayers,
    setYourTeamPlayers2,
    setYourStartingLineUp,
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
    function simulateGame() {
        const result: number = WinFormula(teamA.lineup, teamB.lineup);
        if (result === 1) {
            //if team1 wins
            teamA.wins++;
            teamB.losses++;
            alert(
                // eslint-disable-next-line prettier/prettier
                `Congratulations ${teamA.name}'s team, you win! Your current win-loss record is ${teamA.wins}-${teamA.losses}`
            );
        } else {
            if (result === 2) {
                //if team 2 wins
                teamB.wins++;
                teamA.losses++;
                alert(
                    // eslint-disable-next-line prettier/prettier
                    `Congratulations ${teamB.name}'s team, you win! Your current win-loss record is ${teamB.wins}-${teamB.losses}`
                );
            } else if (result === 3) {
                //if you are trying to simulate a game with the same teams
                alert("You can't simulate a game against yourself.");
            } else {
                //if either team does not have exactly 11 players
                alert(
                    "Please ensure both teams have 5 or 11 Players in their lineups."
                );
            }
        }
    } //end of simulateGame (counts Ws and Ls)
    function handleOnDropStartingLineup(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };
        if (
            oldPlayer.name ===
            teamA.players.find(
                (a_player: Player): boolean => a_player.name === newPlayer.name
            )?.name
        ) {
            const sum = teamA.lineup.reduce(
                (total: number, a_player: Player) =>
                    a_player.imageURL === newPlayer.imageURL
                        ? total + 1
                        : total,
                1
            );
            if (sum !== 0) {
                newPlayer.name = newPlayer.name + " (" + sum + ")";
            }
        }
        // add the player to the list
        if (newPlayer !== undefined) {
            if (teamA.lineup.length < 11) {
                setYourStartingLineUp([...teamA.lineup, newPlayer]);
                teamA.lineup.push(newPlayer);
            }
        }
        if (
            newPlayer.imageURL !==
            teamA.players.find(
                (a_player: Player): boolean =>
                    a_player.imageURL === newPlayer.imageURL
            )?.imageURL
        ) {
            setYourTeamPlayers([...teamA.players, newPlayer]);
            teamA.players.push(newPlayer);
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
        if (
            oldPlayer.name ===
            teamB.players.find(
                (a_player: Player): boolean => a_player.name === newPlayer.name
            )?.name
        ) {
            const sum = teamB.lineup.reduce(
                (total: number, a_player: Player) =>
                    a_player.imageURL === newPlayer.imageURL
                        ? total + 1
                        : total,
                1
            );
            if (sum !== 0) {
                newPlayer.name = newPlayer.name + " (" + sum + ")";
            }
        }
        // add the player to the list
        if (newPlayer !== undefined) {
            if (teamB.lineup.length < 11) {
                setYourStartingLineUp2([...teamB.lineup, newPlayer]);
                teamB.lineup.push(newPlayer);
            }
        }
        if (
            newPlayer.imageURL !==
            teamB.players.find(
                (a_player: Player): boolean =>
                    a_player.imageURL === newPlayer.imageURL
            )?.imageURL
        ) {
            setYourTeamPlayers2([...teamB.players, newPlayer]);
            teamB.players.push(newPlayer);
        }
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <div className="min-h-[77vh]">
            <Container>
                <Row>
                    <Col>
                        <div className="pl-56 pt-8">
                            <TeamDropDownButton
                                team={teamA}
                                setTeam={setTeamA}
                                teams={teams}
                            ></TeamDropDownButton>
                        </div>
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
                        <div className="pt-20">
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
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="pl-56 pt-8">
                            <TeamDropDownButton
                                team={teamB}
                                setTeam={setTeamB}
                                teams={teams}
                            ></TeamDropDownButton>
                        </div>
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
                        <div className="pt-20">
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
                        </div>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <div className="pt-10">
                <Button
                    className="text-2xl text-center dark:text-white font-bold py-2 px-4 rounded-full hover:border-transparent bg-blue-500 hover:bg-blue-600"
                    onClick={simulateGame}
                >
                    Simulate Game
                </Button>
            </div>
        </div>
    );
}
