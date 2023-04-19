import React from "react";
import { Player } from "../interfaces/player";

export function StartingLineup({ lineup }: { lineup: Player[] }): JSX.Element {
    return (
        <div
            style={{
                justifyContent: "center",
                display: "flex",
                padding: "10px"
            }}
        >
            <ul className="square border">
                {lineup.map(
                    (player): JSX.Element => (
                        <li key={player.name}>{player.name}</li>
                    )
                )}
            </ul>
        </div>
    );
}
