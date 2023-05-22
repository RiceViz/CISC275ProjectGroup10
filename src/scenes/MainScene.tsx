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
    team,
    setAllPlayers,
    yourTeamPlayers,
    setYourTeamPlayers,
    yourStartingLineUp,
    setYourStartingLineUp
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
    const [isRemoveButtonHovered, setIsRemoveButtonHovered] = useState(false);
    const [selectedPositionFilter, setSelectedPositionFilter] = useState("");

    function handleOnDropTeam(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };

        if (
            newPlayer.imageURL ===
            process.env.PUBLIC_URL + "/blankprofilepicture.png"
        ) {
            if (
                !yourTeamPlayers.some((player: Player) =>
                    checkIdenticalPlayers(player, newPlayer)
                )
            ) {
                setYourTeamPlayers([...yourTeamPlayers, newPlayer]);
                team.players.push(newPlayer);
                return;
                // } else if (
                //     !yourTeamPlayers.some(
                //         (player: Player) =>
                //             player.name === newPlayer.name &&
                //             player.rating === newPlayer.rating &&
                //             player.position === newPlayer.position
                //     )
                // ) {
                //     setYourTeamPlayers([...yourTeamPlayers, newPlayer]);
                //     team.players.push(newPlayer);
                //     return;
            } else {
                return;
            }
        }

        const indexOfPlayer = yourTeamPlayers.findIndex((player: Player) =>
            checkIdenticalURLs(player, newPlayer)
        );

        // add the player to the list
        if (indexOfPlayer === -1) {
            setYourTeamPlayers([...yourTeamPlayers, newPlayer]);
            team.players.push(newPlayer);
        } else {
            const newteam = [...yourTeamPlayers];
            newteam.splice(indexOfPlayer, 1, newPlayer);
            setYourTeamPlayers(newteam);
            team.players = newteam;
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
        const playerToRemoveFromTeam = team.players.find(
            (player) => player.name === widgetType
        );
        const playerToRemoveFromLineup = team.lineup.find(
            (player) => player.name === widgetType
        );
        if (
            playerToRemoveFromTeam ===
            team.players.find(
                (a_player: Player): boolean =>
                    a_player === playerToRemoveFromTeam
            )
        ) {
            if (playerToRemoveFromTeam) {
                // Remove the player from the team players' list
                const updatedTeamPlayers = yourTeamPlayers.filter(
                    (player) => player !== playerToRemoveFromTeam
                );
                setYourTeamPlayers(updatedTeamPlayers);
                team.players = team.players.filter(
                    (a_player: Player): boolean =>
                        a_player.imageURL !== playerToRemoveFromTeam.imageURL
                );
                const updatedLineupPlayers = yourStartingLineUp.filter(
                    (player) => player !== playerToRemoveFromTeam
                );
                setYourStartingLineUp(updatedLineupPlayers);
                team.lineup = team.lineup.filter(
                    (a_player: Player): boolean =>
                        a_player.imageURL !== playerToRemoveFromTeam.imageURL
                );
                console.log("test1");
            }
        }
        if (
            playerToRemoveFromLineup ===
            team.lineup.find(
                (a_player: Player): boolean =>
                    a_player === playerToRemoveFromLineup
            )
        ) {
            if (playerToRemoveFromLineup) {
                // Remove the player from the team players' list
                const updatedTeamPlayers = yourStartingLineUp.filter(
                    (player) => player !== playerToRemoveFromLineup
                );
                setYourStartingLineUp(updatedTeamPlayers);
                team.lineup = team.lineup.filter(
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
            team.players.find(
                (a_player: Player): boolean => a_player.name === newPlayer.name
            )?.name
        ) {
            let sum = team.lineup.reduce(
                (total: number, a_player: Player) =>
                    a_player.imageURL === newPlayer.imageURL
                        ? total + 1
                        : total,
                1
            );
            while (
                oldPlayer.name + " (" + sum + ")" ===
                team.lineup.find(
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
            if (yourStartingLineUp.length < 11) {
                setYourStartingLineUp([...yourStartingLineUp, newPlayer]);
                team.lineup.push(newPlayer);
            }
        }
        if (
            newPlayer.imageURL !==
            team.players.find(
                (a_player: Player): boolean =>
                    a_player.imageURL === newPlayer.imageURL
            )?.imageURL
        ) {
            setYourTeamPlayers([...yourTeamPlayers, newPlayer]);
            team.players.push(newPlayer);
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
                <div>
                    {user !== "Coach" ? (
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
                    ) : null}
                </div>
                <Container>
                    <div className="flex justify-center">
                        {user === "League Manager" ||
                        user === "Team Manager" ? (
                            <div className="flex justify-center">
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
                            className="justify-center"
                            onDrop={handleOnDropTeam}
                            onDragOver={handleDragOver}
                        >
                            <Lineup
                                title={team.name + " Players"}
                                players={team.players}
                                setPlayers={setYourTeamPlayers}
                                user={user}
                                playersEditable={false}
                            ></Lineup>
                        </div>
                        <div
                            className="justify-center"
                            onDrop={handleOnDropStartingLineup}
                            onDragOver={handleDragOver}
                        >
                            <Lineup
                                title={team.name + " Lineup"}
                                players={team.lineup}
                                setPlayers={setYourStartingLineUp}
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
