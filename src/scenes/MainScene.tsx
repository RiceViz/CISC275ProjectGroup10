import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import {
    Player,
    checkIdenticalURLs,
    checkIdenticalPlayers
} from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Container } from "react-bootstrap";
import { User } from "../interfaces/user";

export function MainScene({ user }: { user: User }): JSX.Element {
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());
    const [yourTeamPlayers, setYourTeamPlayers] = useState<Player[]>([]);
    const [yourStartingLineUp, setYourStartingLineUp] = useState<Player[]>([]);

    function handleOnDropTeam(e: React.DragEvent) {
        const name = e.dataTransfer.getData("name") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === name
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };
        newPlayer.lineup = "Team Manager";

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

    function handleOnDropStartingLineup(e: React.DragEvent) {
        const name = e.dataTransfer.getData("name") as string;
        const lineup = e.dataTransfer.getData("lineup");
        if (lineup === "Starting") {
            return;
        }
        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === name
        ) as Player;

        console.log(oldPlayer.lineup);
        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };
        newPlayer.lineup = "Starting";
        setYourStartingLineUp([...yourStartingLineUp, newPlayer]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    return (
        <>
            <div>
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
                            <Lineup
                                title="Your Team"
                                players={yourTeamPlayers}
                                setPlayers={setYourTeamPlayers}
                                user={user}
                                playersEditable={false}
                            ></Lineup>
                        </div>

                        <div
                            onDrop={handleOnDropStartingLineup}
                            onDragOver={handleDragOver}
                        >
                            <Lineup
                                title="Starting Lineup"
                                players={yourStartingLineUp}
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
