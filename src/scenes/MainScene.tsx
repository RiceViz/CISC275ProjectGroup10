import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player, checkIdenticalURLs } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Container, Modal } from "react-bootstrap";
import { User } from "../interfaces/user";

interface Item {
    id: number;
    text: string;
}

export function MainScene({ user }: { user: User }): JSX.Element {
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());
    const [yourTeamPlayers, setYourTeamPlayers] = useState<Player[]>([]);
    const [yourStartingLineUp, setYourStartingLineUp] = useState<Player[]>([]);

    const [items, setItems] = useState<Item[]>([]);
    const [draggingItem, setDraggingItem] = useState<Item | null>(null);

    function handleOnDropTeam(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };

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
        const widgetType = e.dataTransfer.getData("widgetType") as string;

        // find dropped player object based on name
        const oldPlayer = allPlayers.find(
            (player) => player.name === widgetType
        ) as Player;

        // make a new copy of the player (might not be neccessary?)
        const newPlayer = { ...oldPlayer };

        setYourStartingLineUp([...yourStartingLineUp, newPlayer]);
    }

    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleDragStart(
        event: React.DragEvent<HTMLLIElement>,
        item: Item
    ) {
        setDraggingItem(item);
    }

    function handleDrop(event: React.DragEvent<HTMLInputElement>) {
        event.preventDefault();
        if (draggingItem) {
            const newItems = items.filter(
                (item) => item.id !== draggingItem.id
            );
            setItems([...newItems, draggingItem]);
            setDraggingItem(null);
        }
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
