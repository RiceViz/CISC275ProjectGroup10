import React from "react";
import { Player } from "../interfaces/player";
import { PlayerBanner } from "./PlayerBanner";
import { User } from "../interfaces/user";

/**
 * Holds the Players Starting LineUp
 * @param lineup Player[]
 * @param user User
 * @returns JSX.Element
 */
export function StartingLineUp({
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
