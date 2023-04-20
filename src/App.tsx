import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";
import soccer from "./assets/soccer-landing.jpeg";
import PlayerCard from "./components/PlayerCard";
import { BiUserCircle } from "react-icons/bi";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { StartingLineup } from "./components/StartingLineup";
import { Team } from "./interfaces/team";
import { Player } from "./interfaces/player";
import { PlayerCreator } from "./components/PlayerCreator";

function App(): JSX.Element {
    const newteam: Team = {
        coach: "dan",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };

    const allPlayers: Player[] = PlayerCreator();

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url ${{ soccer }}`,
                backgroundSize: "cover"
            }}
        >
            <Header>
                <div className="flex flex-col dark:text-white">
                    <div className="flex justify-between p-">
                        <ThemeToggle></ThemeToggle>
                        <div className="">
                            <UserDropDownButton
                                logo={<BiUserCircle size={25} />}
                                options={[
                                    "League Manager",
                                    "Team Manager",
                                    "Coach"
                                ]}
                            ></UserDropDownButton>
                        </div>
                    </div>
                    <h1 className="text-4xl text-center dark:text-white">
                        Soccer Football Manager
                    </h1>
                </div>
            </Header>

            <hr></hr>
            <footer className="bg-neutral-50 dark:bg-neutral-900 dark:text-white">
                Created by Trevor, Tyran, Mbiet, Shawn, & Gage
            </footer>
            <div>
                <UserDropDownButton
                    options={["League Manager", "Team Manager", "Coach"]}
                ></UserDropDownButton>
            </div>
            <PlayerCard player={allPlayers[0]}></PlayerCard>
            <StartingLineup lineup={allPlayers}></StartingLineup>
        </div>
    );
}

export default App;
