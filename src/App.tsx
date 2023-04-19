import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";
import PlayerCard from "./components/PlayerCard";
import { StartingLineup } from "./components/StartingLineup";
import { Team } from "./interfaces/team";
import { Player } from "./interfaces/player";

function App(): JSX.Element {
    const player1: Player = {
        name: "Trevor",
        position: "Striker",
        rating: 99,
        imageURL: ""
    };

    const newteam: Team = {
        coach: "dan",
        players: [],
        lineup: [player1],
        wins: 0,
        losses: 0
    };

    return (
        <div className="App">
            <header className="App-header">
                Soccer Fantasy Manager Simulation
                <h5>Created By Trevor, Tyran, Mbiet, Shawn & Gage</h5>
            </header>

            <hr></hr>
            <div>
                <UserDropDownButton
                    options={["League Manager", "Team Manager", "Coach"]}
                ></UserDropDownButton>
            </div>
            <PlayerCard
                name={"name"}
                position={"position"}
                rating={0}
                imageURL={"image"}
            ></PlayerCard>
            <StartingLineup lineup={newteam.lineup}></StartingLineup>
        </div>
    );
}

export default App;
