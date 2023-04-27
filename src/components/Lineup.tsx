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
    user,
    playersEditable
}: {
    lineup: Player[];
    user: User;
    playersEditable: boolean;
}): JSX.Element {
    return (
        <div className="flex p-2 justify-center max-h-[512px] overflow-scroll">
            <div>
                {lineup.map((player): JSX.Element => {
                    return (
                        <PlayerBanner
                            player={player}
                            key={player.name}
                            user={user}
                            isPlayerEditable={playersEditable}
                        ></PlayerBanner>
                    );
                })}
            </div>
        </div>
    );
}
