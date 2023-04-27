import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../interfaces/user";

interface Item {
    id: number;
    text: string;
}

export function MainScene({ user }: { user: User }): JSX.Element {
    const allPlayers: Player[] = PlayerCreator();
    const [yourTeamPlayers, setYourTeamPlayers] = useState<Player[]>([]);
    const [yourStartingLineUp, setYourStartingLineUp] = useState<Player[]>([]);

    const [items, setItems] = useState<Item[]>([]);
    const [draggingItem, setDraggingItem] = useState<Item | null>(null);
    const [inputValue, setInputValue] = useState<string>("");

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

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function handleAddItem() {
        const newItem: Item = {
            id: Math.random(),
            text: inputValue
        };
        setItems([...items, newItem]);
        setInputValue("");
    }

    const handleRemoveItem = (id: number) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    return (
        <>
            <div>
                <Container>
                    <div>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        />
                        <ul>
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    draggable={true}
                                    onDragStart={(event) =>
                                        handleDragStart(event, item)
                                    }
                                >
                                    {item.text}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveItem(item.id)
                                            }
                                        >
                                            Remove Player
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleAddItem}>Add a Player</button>
                    </div>

                    <Row>
                        {user === "League Manager" && (
                            <Lineup
                                title="All Players"
                                lineup={allPlayers}
                                user={user}
                            ></Lineup>
                        )}
                        {user === "Coach" && (
                            <Col className="p-2">
                                Your Team
                                <div
                                    className="BoxedList max-h-[200px]"
                                    onDrop={handleOnDropTeam}
                                    onDragOver={handleDragOver}
                                >
                                    <Lineup
                                        title="Your Players"
                                        lineup={yourTeamPlayers}
                                        user={user}
                                    ></Lineup>
                                </div>
                            </Col>
                        )}
                        {user === "Coach" && (
                            <Col className="p-2">
                                <div
                                    className="BoxedList"
                                    onDrop={handleOnDropStartingLineup}
                                    onDragOver={handleDragOver}
                                >
                                    <Lineup
                                        title="Starting Lineup"
                                        lineup={yourStartingLineUp}
                                        user={user}
                                    ></Lineup>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </>
    );
}
