import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";
import PlayerCard from "./components/PlayerCard";
import soccer from "./assets/soccer-landing.jpeg";
import { BiUserCircle } from "react-icons/bi";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
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
        <div
            className="App"
            style={{
                backgroundImage: `url(${soccer})`,
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
            <PlayerCard
                name={"name"}
                position={"position"}
                rating={0}
                imageURL={"image"}
            />
            <PlayerCard
                name={"name"}
                position={"position"}
                rating={0}
                imageURL={"image"}
            />
            <PlayerCard
                name={"name"}
                position={"position"}
                rating={0}
                imageURL={"image"}
            />
            <PlayerCard
                name={"name"}
                position={"position"}
                rating={0}
                imageURL={"image"}
            />
            <footer className="bg-neutral-50 dark:bg-neutral-900 dark:text-white">
                Created by Trevor, Tyran, Mbiet, Shawn, & Gage
            </footer>
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
