/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import {
    Player,
    checkIdenticalURLs,
    checkIdenticalPlayers
} from "../interfaces/player";
import { Container } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Team } from "../interfaces/team";

export function MainScene({
    user,
    allPlayers,
    setAllPlayers,
    teams,
    setTeams,
    teamIndex
}: {
    user: User;
    allPlayers: Player[];
    setAllPlayers: (players: Player[]) => void;
    teams: Team[];
    setTeams: (newTeams: Team[]) => void;
    teamIndex: number;
}): JSX.Element {
    const currentTeam: Team = teams[teamIndex];

    function setTeamLineUp(newLineup: Player[]) {
        const tmpteams = [...teams];
        const newTeam: Team = {
            ...tmpteams[teamIndex],
            lineup: newLineup
        };
        tmpteams.splice(teamIndex, 1, newTeam);
        setTeams(tmpteams);
    }

    function setTeamPlayers(newPlayers: Player[]) {
        const tmpteams = [...teams];
        const newTeam: Team = {
            ...tmpteams[teamIndex],
            players: newPlayers
        };
        tmpteams.splice(teamIndex, 1, newTeam);
        setTeams(tmpteams);
    }

    const [isRemoveButtonHovered, setIsRemoveButtonHovered] = useState(false);
    const [selectedPositionFilter, setSelectedPositionFilter] = useState("");

    function handleOnDropTeam(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const newPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)

        if (
            newPlayer.imageURL ===
            process.env.PUBLIC_URL + "/blankprofilepicture.png"
        ) {
            if (
                !currentTeam.players.some((player: Player) =>
                    checkIdenticalPlayers(player, newPlayer)
                )
            ) {
                setTeamPlayers([...currentTeam.players, newPlayer]);
                return;
                // } else if (
                //     !currentTeam.players.some(
                //         (player: Player) =>
                //             player.name === newPlayer.name &&
                //             player.rating === newPlayer.rating &&
                //             player.position === newPlayer.position
                //     )
                // ) {
                //     setTeamPlayers([...currentTeam.players, newPlayer]);
                //     team.players.push(newPlayer);
                //     return;
            } else {
                return;
            }
        }

        const indexOfPlayer = currentTeam.players.findIndex((player: Player) =>
            checkIdenticalURLs(player, newPlayer)
        );

        // add the player to the list
        if (indexOfPlayer === -1) {
            setTeamPlayers([...currentTeam.players, newPlayer]);
        } else {
            const newteam = [...currentTeam.players];
            newteam.splice(indexOfPlayer, 1, newPlayer);
            setTeamPlayers(newteam);
        }
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    // A removePlayer function to handle the removal of a player
    function handleRemovePlayer(e: React.DragEvent) {
        e.preventDefault();

        // Set the hover state to true when the player is dragged over the remove button
        setIsRemoveButtonHovered(true);

        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // Find the dropped player object based on name in first team
        const playerToRemoveFromTeam = currentTeam.players.find(
            (player) => player.name === widgetType
        );
        const playerToRemoveFromLineup = currentTeam.lineup.find(
            (player) => player.name === widgetType
        );
        if (
            playerToRemoveFromTeam ===
            currentTeam.players.find(
                (a_player: Player): boolean =>
                    a_player === playerToRemoveFromTeam
            )
        ) {
            if (playerToRemoveFromTeam) {
                // Remove the player from the team players' list
                const updatedTeamPlayers = currentTeam.players.filter(
                    (player) => player !== playerToRemoveFromTeam
                );
                setTeamPlayers(updatedTeamPlayers);
                currentTeam.players = currentTeam.players.filter(
                    (a_player: Player): boolean =>
                        a_player.imageURL !== playerToRemoveFromTeam.imageURL
                );
                const updatedLineupPlayers = currentTeam.lineup.filter(
                    (player) => player !== playerToRemoveFromTeam
                );
                setTeamLineUp(updatedLineupPlayers);
                currentTeam.lineup = currentTeam.lineup.filter(
                    (a_player: Player): boolean =>
                        a_player.imageURL !== playerToRemoveFromTeam.imageURL
                );
                console.log("test1");
            }
        }
        if (
            playerToRemoveFromLineup ===
            currentTeam.lineup.find(
                (a_player: Player): boolean =>
                    a_player === playerToRemoveFromLineup
            )
        ) {
            if (playerToRemoveFromLineup) {
                // Remove the player from the team players' list
                const updatedTeamPlayers = currentTeam.lineup.filter(
                    (player) => player !== playerToRemoveFromLineup
                );
                setTeamLineUp(updatedTeamPlayers);
                currentTeam.lineup = currentTeam.lineup.filter(
                    (a_player: Player): boolean =>
                        a_player.name !== playerToRemoveFromLineup.name
                );
                console.log("test2");
            }
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
        if (
            oldPlayer.name ===
            currentTeam.players.find(
                (a_player: Player): boolean => a_player.name === newPlayer.name
            )?.name
        ) {
            let sum = currentTeam.lineup.reduce(
                (total: number, a_player: Player) =>
                    a_player.imageURL === newPlayer.imageURL
                        ? total + 1
                        : total,
                1
            );
            while (
                oldPlayer.name + " (" + sum + ")" ===
                currentTeam.lineup.find(
                    (a_player: Player): boolean =>
                        a_player.name === newPlayer.name + " (" + sum + ")"
                )?.name
            ) {
                sum++;
            }
            if (sum !== 0) {
                newPlayer.name = newPlayer.name + " (" + sum + ")";
            }
        }
        // add the player to the list
        if (newPlayer !== undefined) {
            if (currentTeam.lineup.length < 12) {
                setTeamLineUp([...currentTeam.lineup, newPlayer]);
                currentTeam.lineup.push(newPlayer);
            }
        }
        if (
            newPlayer.imageURL !==
            currentTeam.players.find(
                (a_player: Player): boolean =>
                    a_player.imageURL === newPlayer.imageURL
            )?.imageURL
        ) {
            setTeamPlayers([...currentTeam.players, newPlayer]);
            currentTeam.players.push(newPlayer);
        }
    }

    function handleRemoveButtonMouseEnter() {
        setIsRemoveButtonHovered(true);
    }

    function handleRemoveButtonMouseLeave() {
        setIsRemoveButtonHovered(false);
    }

    return (
        <>
            <div>
                {(user === "League Manager" || user === "Team Manager") && (
                    <div
                        className={`removeButton ${
                            isRemoveButtonHovered ? "removeButtonHover" : ""
                        }`}
                        onDrop={handleRemovePlayer}
                        onDragOver={handleDragOver}
                        onMouseEnter={handleRemoveButtonMouseEnter}
                        onMouseLeave={handleRemoveButtonMouseLeave}
                    >
                        <button className="removeButtonHover">
                            Drag Player Here To Remove
                        </button>
                    </div>
                )}
                {user === "League Manager" || user === "Team Manager" ? (
                    <div>
                        <select
                            className="filter-dropdown"
                            value={selectedPositionFilter}
                            onChange={(e) =>
                                setSelectedPositionFilter(e.target.value)
                            }
                        >
                            <option value="">All Positions</option>
                            <option value="Forward">Forwards</option>
                            <option value="Midfielder">Midfielders</option>
                            <option value="Defender">Defenders</option>
                            <option value="Goalkeeper">Goalkeepers</option>
                        </select>
                    </div>
                ) : null}
                <Container>
                    <div className="flex justify-center">
                        {user === "League Manager" ||
                        user === "Team Manager" ? (
                            <div className="flex justify-center pt-10">
                                <Lineup
                                    title="All Players"
                                    players={allPlayers.filter((player) =>
                                        selectedPositionFilter
                                            ? player.position ===
                                              selectedPositionFilter
                                            : true
                                    )}
                                    setPlayers={setAllPlayers}
                                    user={user}
                                    playersEditable={true}
                                ></Lineup>
                            </div>
                        ) : null}

                        <div
                            className="justify-center pt-10"
                            onDrop={handleOnDropTeam}
                            onDragOver={handleDragOver}
                        >
                            <Lineup
                                title={currentTeam.name + " Players"}
                                players={currentTeam.players}
                                setPlayers={setTeamPlayers}
                                user={user}
                                playersEditable={false}
                            ></Lineup>
                        </div>
                        <div
                            className="justify-center"
                            onDrop={handleOnDropStartingLineup}
                            onDragOver={handleDragOver}
                        >
                            <h3 className="justify-center pl-20">
                                <div className="bg-gray-300 bg-opacity-75 w-56">
                                    {"Player Count (" +
                                        currentTeam.lineup.length +
                                        ")"}
                                    <br></br>
                                    You Need 5 Or 11 Players
                                </div>
                            </h3>
                            <Lineup
                                title={currentTeam.name + " Lineup"}
                                players={currentTeam.lineup}
                                setPlayers={setTeamLineUp}
                                user={user}
                                playersEditable={false}
                            ></Lineup>
                        </div>
                    </div>
                </Container>
                <br></br>
            </div>
        </>
    );
}
