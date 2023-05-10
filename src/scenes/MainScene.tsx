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

export function MainScene({
    user,
    allPlayers,
    setAllPlayers,
    yourTeamPlayers,
    setYourTeamPlayers,
    yourTeamPlayers2,
    setYourTeamPlayers2
}: {
    user: User;
    allPlayers: Player[];
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
                return;
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
        } else {
            const newteam = [...yourTeamPlayers];
            newteam.splice(indexOfPlayer, 1, newPlayer);
            setYourTeamPlayers(newteam);
        }
    }

    function handleOnDropTeam2(e: React.DragEvent) {
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
                !yourTeamPlayers2.some((player: Player) =>
                    checkIdenticalPlayers(player, newPlayer)
                )
            ) {
                setYourTeamPlayers2([...yourTeamPlayers2, newPlayer]);
                return;
            } else {
                return;
            }
        }

        const indexOfPlayer = yourTeamPlayers2.findIndex((player: Player) =>
            checkIdenticalURLs(player, newPlayer)
        );

        // add the player to the list
        if (indexOfPlayer === -1) {
            setYourTeamPlayers2([...yourTeamPlayers2, newPlayer]);
        } else {
            const newteam = [...yourTeamPlayers2];
            newteam.splice(indexOfPlayer, 1, newPlayer);
            setYourTeamPlayers2(newteam);
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

        // Find the dropped player object based on name
        const playerToRemove = yourTeamPlayers.find(
            (player) => player.name === widgetType
        );

        if (playerToRemove) {
            // Remove the player from the team players' list
            const updatedTeamPlayers = yourTeamPlayers.filter(
                (player) => player !== playerToRemove
            );
            setYourTeamPlayers(updatedTeamPlayers);
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
                        Drag Player here to remove
                    </button>
                </div>

                <Container>
                    <div className="flex justify-center">
                        <Lineup
                            title="All Players"
                            players={allPlayers}
                            setPlayers={setAllPlayers}
                            user={user}
                            playersEditable={true}
                        ></Lineup>

                        <div
                            className="justify-center"
                            onDrop={handleOnDropTeam}
                            onDragOver={handleDragOver}
                        >
                            {user === "League Manager" ||
                                user === "Team Manager"}

                            <Lineup
                                title="Team 1 Players"
                                players={yourTeamPlayers}
                                setPlayers={setYourTeamPlayers}
                                user={user}
                                playersEditable={false}
                            ></Lineup>
                        </div>

                        <div
                            onDrop={handleOnDropTeam2}
                            onDragOver={handleDragOver}
                        >
                            <Lineup
                                title="Team 2 Players"
                                players={yourTeamPlayers2}
                                setPlayers={setYourTeamPlayers2}
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
