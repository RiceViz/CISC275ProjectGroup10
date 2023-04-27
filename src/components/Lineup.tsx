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
    title,
    lineup,
    user
}: {
    title: string;
    lineup: Player[];
    user: User;
}): JSX.Element {
    return (
        <div className="m-2 p-2 rounded-lg dark:text-white shadow-md w-min bg-neutral-100 dark:bg-neutral-800">
            {title}
            <div className="flex justify-center">
                <div>Search</div>
                <div>Position</div>
                <div>Sort</div>
            </div>

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
        </div>
    );
}
