import "./App.tsx";
import React, { useContext } from "react";
import WinLossContext from "./WinLossContext";
export function WinLossRecord() {
    const { team1Wins, team2Wins } = useContext(WinLossContext);

    return (
        <div>
            <p>Team 1 Wins: {team1Wins}</p>
            <p>Team 2 Wins: {team2Wins}</p>
        </div>
    );
}
export default WinLossRecord;
