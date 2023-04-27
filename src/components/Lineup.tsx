import React from "react";
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
    user,
    playersEditable
}: {
    players: Player[];
    setPlayers: (players: Player[]) => void;
    user: User;
    playersEditable: boolean;
}): JSX.Element {
    return (
        <div className="flex p-2 justify-center max-h-[512px] overflow-scroll">
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
    );
}
