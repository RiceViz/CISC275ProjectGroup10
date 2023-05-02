import React from "react";
import { Player } from "../interfaces/player";
import { PlayerBanner } from "./PlayerBanner";
import { User } from "../interfaces/user";
import { AddPlayerButton } from "./AddPlayerButton";

/**
 * Iterates a list of Players and creates a PlayerBanner for each
 * @param lineup Player[]
 * @returns JSX.Element
 */
export function Lineup({
    title,
    players,
    setPlayers,
    user,
    playersEditable
}: {
    title: string;
    players: Player[];
    setPlayers: (players: Player[]) => void;
    user: User;
    playersEditable: boolean;
}): JSX.Element {
    let className: string;
    switch (title) {
        case "All Players":
            className =
                "m-2 p-2 justify-self-center bg-red-400/70 dark:text-white dark:bg-red-950/80 min-w-[364px] w-fit rounded-lg";
            break;
        case "Your Team":
            className =
                "m-2 p-2 justify-self-center bg-sky-400/70 dark:text-white dark:bg-sky-950/80 min-w-[364px] w-fit rounded-lg";
            break;
        case "Starting Lineup":
            className =
                "m-2 p-2 justify-self-center bg-lime-400/70 dark:text-white dark:bg-lime-950/80 min-w-[364px] w-fit rounded-lg";
            break;
        default:
            className =
                "m-2 p-2 justify-self-center bg-neutral-400/70 dark:text-white dark:bg-neutral-950/80 min-w-[364px] w-fit rounded-lg";
            break;
    }

    function handleDelete(e: React.DragEvent) {
        const name = e.dataTransfer.getData("name");
        const lineup = e.dataTransfer.getData("lineup");
        if (lineup === title) {
            const p_index = players.findIndex((player) => player.name === name);
            const filtered = players.filter(
                (player, index) => index != p_index
            );
            console.log(filtered);
            setPlayers(filtered);
        }
    }

    return (
        <div className={className}>
            <span className="text-lg font-semibold">{title}</span>

            {user === "League Manager" && playersEditable && (
                <AddPlayerButton
                    addPlayer={(player: Player) =>
                        setPlayers([player, ...players])
                    }
                ></AddPlayerButton>
            )}
            <div className="flex justify-around">
                <div>Add</div>
                <div onDrop={handleDelete}>Delete</div>
            </div>

            <div
                className=" flex m-2 p-2 justify-center max-h-[512px] overflow-scroll"
                id={title}
            >
                <div>
                    {players.map((player, index): JSX.Element => {
                        return (
                            <PlayerBanner
                                player={player}
                                setPlayer={(newp: Player) => {
                                    const newlist = [...players];
                                    newlist.splice(index, 1, newp);
                                    setPlayers(newlist);
                                }}
                                key={player.name}
                                user={user}
                                index={index}
                                isPlayerEditable={playersEditable}
                            ></PlayerBanner>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
