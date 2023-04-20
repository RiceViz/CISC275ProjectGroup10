import React from "react";
import { Player } from "../interfaces/player";
import { PlayerBanner } from "./PlayerBanner";

export function StartingLineup({ lineup }: { lineup: Player[] }): JSX.Element {
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
                        ></PlayerBanner>
                    )
                )}
            </div>
        </div>
    );
}
