/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { Player } from "../interfaces/player";
import { PlayerBanner } from "./PlayerBanner";
import { User } from "../interfaces/user";
import { Team } from "../interfaces/team";

const [id, setID] = useState<number>(0);

function IDIncrease(): void {
    setID(id + 1);
}

/**
 * Iterates a list of Players and creates a PlayerBanner for each
 * @param lineup Player[]
 * @returns JSX.Element
 */

export function Lineup({
    lineup,
    user
}: {
    lineup: Player[];
    user: User;
}): JSX.Element {
    const [players, setPlayers] = useState<Team[]>([]);

    const handleDragStart = (
        event: React.DragEvent<HTMLDivElement>,
        index: number
    ) => {
        event.dataTransfer.setData("text/plain", index.toString());
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (
        event: React.DragEvent<HTMLDivElement>,
        index: number
    ) => {
        event.preventDefault();
        const dragIndex = parseInt(event.dataTransfer.getData("text/plain"));
        const draggedItem = players[dragIndex];
        const remainingItems = players.filter((item, idx) => idx !== dragIndex);
        setPlayers([
            ...remainingItems.slice(0, index),
            draggedItem,
            ...remainingItems.slice(index)
        ]);
    };
    return (
        <div
            style={{
                justifyContent: "center",
                display: "flex",
                padding: "10px"
            }}
        >
            <div>
                {lineup.map(
                    (player): JSX.Element => (
                        <PlayerBanner
                            key={id}
                            onDragStart={(
                                event: React.DragEvent<HTMLDivElement>
                            ) => handleDragStart(event, id)}
                            onDragOver={handleDragOver}
                            onDrop={(event: React.DragEvent<HTMLDivElement>) =>
                                handleDrop(event, id)
                            }
                            player={player}
                            user={user}
                        ></PlayerBanner>
                    )
                )}
            </div>
        </div>
    );
}
