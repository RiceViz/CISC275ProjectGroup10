import React, { useState } from "react";
import { Player } from "../interfaces/player";
import { PlayerBanner } from "./PlayerBanner";
import { User } from "../interfaces/user";

/**
 * Iterates a list of Players and creates a PlayerBanner for each
 * @param lineup Player[]
 * @returns JSX.Element
 */
export function Lineup({
    players,
    setPlayers,
    user
}: {
    players: Player[];
    setPlayers: (players: Player[]) => void;
    user: User;
}): JSX.Element {
    return (
        <div
            style={{
                justifyContent: "center",
                display: "flex",
                padding: "10px"
            }}
        >
            <div>
                {players.map((player, index): JSX.Element => {
                    const [editMode, setEditMode] = useState<boolean>(false);
                    return (
                        <PlayerBanner
                            player={player}
                            setPlayer={(newp: Player) => {
                                const newlist = [...players];
                                newlist.splice(index, 1, newp);
                                setPlayers(newlist);
                            }}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            key={player.name}
                            user={user}
                            index={index}
                        ></PlayerBanner>
                    );
                })}
            </div>
        </div>
    );
}
