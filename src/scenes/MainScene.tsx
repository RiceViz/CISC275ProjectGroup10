import React from "react";
import "../App.css";
import { UserDropDownButton } from "../components/UserDropDownButton";
import { StartingLineup } from "../components/StartingLineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";

export function MainScene(): JSX.Element {
    const allPlayers: Player[] = PlayerCreator();
    return (
        <div>
            <div>
                <UserDropDownButton
                    options={["League Manager", "Team Manager", "Coach"]}
                ></UserDropDownButton>
            </div>
            <StartingLineup lineup={allPlayers}></StartingLineup>
        </div>
    );
}
