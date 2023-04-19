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
        position: "Midfielder",
        rating: 99,
        imageURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-hcNzaVT_7bwqJ3yQ5OzjejlSnVoX_1LureTRN99&s"
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
            <PlayerCard player={player1}></PlayerCard>
            <StartingLineup lineup={newteam.lineup}></StartingLineup>
        </div>
    );
}

export default App;
