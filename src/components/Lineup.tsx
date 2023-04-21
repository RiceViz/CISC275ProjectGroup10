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
    lineup,
    playerP,
    user
}: {
    lineup: Player[];
    playerP: Player[];

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
                {lineup.map((player): JSX.Element => {
                    return (
                        <PlayerBanner
                            player={player}
                            key={player.name}
                            user={user}
                        ></PlayerBanner>
                    );
                })}
<<<<<<< HEAD
            </div>
            <div>
                {playerP.map((player): JSX.Element => {
                    return (
                        <PlayerBanner
                            player={player}
                            key={player.name}
                            user={user}
                        ></PlayerBanner>
                    );
                })}
=======
>>>>>>> 6837199c8a491e1ba7ee2104546a75de0db8ed87
            </div>
        </div>
    );
}
