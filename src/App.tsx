import React, { useState } from "react";
import "./App.css";
import soccer from "./assets/soccer-landing.jpeg";
import { MainScene } from "./scenes/MainScene";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { UserDropDownButton } from "./components/UserDropDownButton";
import { User } from "./interfaces/user";
import { PlayScene } from "./scenes/PlayScene";
import { Button } from "react-bootstrap";
import { Player } from "./interfaces/player";
import { PlayerCreator } from "./components/PlayerCreator";

function RenderCurrentScene({
    scene,
    user,
    allPlayers,
    setAllPlayers,
    yourTeamPlayers,
    setYourTeamPlayers,
    yourStartingLineUp,
    setYourStartingLineUp
}: {
    scene: string;
    user: User;
    allPlayers: Player[];
    setAllPlayers: (players: Player[]) => void;
    yourTeamPlayers: Player[];
    setYourTeamPlayers: (players: Player[]) => void;
    yourStartingLineUp: Player[];
    setYourStartingLineUp: (players: Player[]) => void;
}): JSX.Element {
    switch (scene) {
        case "MAIN":
            return (
                <MainScene
                    user={user}
                    allPlayers={allPlayers}
                    setAllPlayers={setAllPlayers}
                    yourTeamPlayers={yourTeamPlayers}
                    setYourTeamPlayers={setYourTeamPlayers}
                    yourStartingLineUp={yourStartingLineUp}
                    setYourStartingLineUp={setYourStartingLineUp}
                ></MainScene>
            );
        case "PLAY":
            return (
                <PlayScene
                    user={user}
                    allPlayers={allPlayers}
                    setAllPlayers={setAllPlayers}
                    yourTeamPlayers={yourTeamPlayers}
                    setYourTeamPlayers={setYourTeamPlayers}
                    yourStartingLineUp={yourStartingLineUp}
                    setYourStartingLineUp={setYourStartingLineUp}
                ></PlayScene>
            );
        default:
            return (
                <MainScene
                    user={user}
                    allPlayers={allPlayers}
                    setAllPlayers={setAllPlayers}
                    yourTeamPlayers={yourTeamPlayers}
                    setYourTeamPlayers={setYourTeamPlayers}
                    yourStartingLineUp={yourStartingLineUp}
                    setYourStartingLineUp={setYourStartingLineUp}
                ></MainScene>
            );
    }
}

function App(): JSX.Element {
    const [user, setUser] = useState<User>("League Manager");
    const [scene, setScene] = useState<string>("MAIN");
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());
    const [yourTeamPlayers, setYourTeamPlayers] = useState<Player[]>([]);
    const [yourStartingLineUp, setYourStartingLineUp] = useState<Player[]>([]);

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
                                //logo={<BiUserCircle size={25} />}
                                user={user}
                                setUser={setUser}
                            ></UserDropDownButton>
                        </div>
                    </div>
                    <h1 className="text-4xl text-center dark:text-white">
                        Soccer Football Manager
                    </h1>
                </div>
            </Header>
            <hr></hr>
            <RenderCurrentScene
                scene={scene}
                user={user}
                allPlayers={allPlayers}
                setAllPlayers={setAllPlayers}
                yourTeamPlayers={yourTeamPlayers}
                setYourTeamPlayers={setYourTeamPlayers}
                yourStartingLineUp={yourStartingLineUp}
                setYourStartingLineUp={setYourStartingLineUp}
            ></RenderCurrentScene>
            <br></br>
            {/* Set Scene Button */}
            <div>
                {scene === "MAIN" ? null : (
                    <Button
                        className="text-2xl text-center dark:text-white"
                        // onClick={simulateGame}
                    >
                        Simulate Game
                    </Button>
                )}
            </div>
            <br className="height:60px"></br>
            <Button
                className="text-2xl text-center dark:text-white"
                onClick={() => setScene(scene === "MAIN" ? "PLAY" : "MAIN")}
            >
                {scene === "MAIN" ? "Simulation Mode" : "Team Management Mode"}
            </Button>

            <footer className="bg-neutral-50 dark:bg-neutral-900 dark:text-white">
                Created by Trevor, Tyran, Mbiet, Shawn, & Gage
            </footer>
        </div>
    );
}

export default App;
