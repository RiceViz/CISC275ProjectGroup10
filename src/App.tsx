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
import { WinFormula } from "./components/WinFormula";

function RenderCurrentScene({
    scene,
    user,
    allPlayers,
    setAllPlayers,
    yourTeamPlayers,
    setYourTeamPlayers,
    yourTeamPlayers2,
    setYourTeamPlayers2,
    yourStartingLineUp,
    setYourStartingLineUp,
    yourStartingLineUp2,
    setYourStartingLineUp2
}: {
    scene: string;
    user: User;
    allPlayers: Player[];
    setAllPlayers: (players: Player[]) => void;
    yourTeamPlayers: Player[];
    setYourTeamPlayers: (players: Player[]) => void;
    yourTeamPlayers2: Player[];
    setYourTeamPlayers2: (players: Player[]) => void;
    yourStartingLineUp: Player[];
    setYourStartingLineUp: (players: Player[]) => void;
    yourStartingLineUp2: Player[];
    setYourStartingLineUp2: (players: Player[]) => void;
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
                    yourTeamPlayers2={yourTeamPlayers2}
                    setYourTeamPlayers2={setYourTeamPlayers2}
                    yourStartingLineUp={yourStartingLineUp}
                    setYourStartingLineUp={setYourStartingLineUp}
                    yourStartingLineUp2={yourStartingLineUp2}
                    setYourStartingLineUp2={setYourStartingLineUp2}
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
                    yourTeamPlayers2={yourTeamPlayers2}
                    setYourTeamPlayers2={setYourTeamPlayers2}
                    yourStartingLineUp={yourStartingLineUp}
                    setYourStartingLineUp={setYourStartingLineUp}
                    yourStartingLineUp2={yourStartingLineUp2}
                    setYourStartingLineUp2={setYourStartingLineUp2}
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
                    yourTeamPlayers2={yourTeamPlayers2}
                    setYourTeamPlayers2={setYourTeamPlayers2}
                    yourStartingLineUp={yourStartingLineUp}
                    setYourStartingLineUp={setYourStartingLineUp}
                    yourStartingLineUp2={yourStartingLineUp2}
                    setYourStartingLineUp2={setYourStartingLineUp2}
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
    const [yourTeamPlayers2, setYourTeamPlayers2] = useState<Player[]>([]);
    const [yourStartingLineUp2, setYourStartingLineUp2] = useState<Player[]>(
        []
    );

    function simulateGame() {
        /*return (
            <WinFormula yourTeamPlayers={[]} yourTeamPlayers2={[]}></WinFormula>
        );*/
        const result = WinFormula(yourStartingLineUp, yourStartingLineUp2);
        /*const result = (
            <WinFormula yourTeamPlayers={[]} yourTeamPlayers2={[]}></WinFormula>
        );*/
        alert(result);
    }

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
                yourTeamPlayers2={yourTeamPlayers2}
                setYourTeamPlayers2={setYourTeamPlayers2}
                yourStartingLineUp={yourStartingLineUp}
                setYourStartingLineUp={setYourStartingLineUp}
                yourStartingLineUp2={yourStartingLineUp2}
                setYourStartingLineUp2={setYourStartingLineUp2}
            ></RenderCurrentScene>
            <br></br>
            {/* Set Scene Button */}
            <div>
                {scene === "MAIN" ? null : (
                    <Button
                        className="text-2xl text-center dark:text-white"
                        onClick={simulateGame}
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
