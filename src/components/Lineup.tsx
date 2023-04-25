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
    user
}: {
    lineup: Player[];
    user: User;
}): JSX.Element {
    return (
        <div className="flex p-2 justify-center max-h-screen overflow-scroll">
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
            </div>
        </div>
    );
}
