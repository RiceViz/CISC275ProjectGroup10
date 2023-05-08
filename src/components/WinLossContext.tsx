/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
const WinLossContext = React.createContext({
    team1Wins: 0,
    team2Wins: 0,
    setTeam1Wins: () => {},
    setTeam2Wins: () => {}
});
export default WinLossContext;
