import React from "react";
import { Player } from "../interfaces/player";
import { PlayerBanner } from "./PlayerBanner";
import { User } from "../interfaces/user";
/**
 * Holds The Players Team LineUp
 * @param lineup Player[]
 * @param user User
 * @returns JSX.Element
 */
export function YourTeamLineUp({
    lineup,
    user
}: {
    lineup: Player[];
    user: User;
}): JSX.Element {
    return (
        <div className="justify-center flex p-2">
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
