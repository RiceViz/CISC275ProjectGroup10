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
                            player={player}
                            key={player.name}
                            user={user}
                        ></PlayerBanner>
                    )
                )}
            </div>
        </div>
    );
}
