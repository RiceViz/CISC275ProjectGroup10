import React, { useState } from "react";
import "./App.css";
import soccer from "./assets/soccer-landing.jpeg";
import { MainScene } from "./scenes/MainScene";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import UserDropDownButton from "./components/UserDropDownButton";
import { TeamDropDownButton } from "./components/TeamDropDownButton";
import { User } from "./interfaces/user";
import { PlayScene } from "./scenes/PlayScene";
import { Button } from "react-bootstrap";
import { Player } from "./interfaces/player";
import { PlayerCreator } from "./components/PlayerCreator";
import { Team } from "./interfaces/team";
import { AddTeamButton } from "./components/AddTeam";

function RenderCurrentScene({
    scene,
    user,
    allPlayers,
    setAllPlayers,
    teams,
    setTeams,
    teamIndex
}: {
    scene: string;
    user: User;
    allPlayers: Player[];
    setAllPlayers: (players: Player[]) => void;
    teams: Team[];
    setTeams: (teams: Team[]) => void;
    teamIndex: number;
}): JSX.Element {
    switch (scene) {
        case "MAIN":
            return (
                <MainScene
                    user={user}
                    allPlayers={allPlayers}
                    setAllPlayers={setAllPlayers}
                    teams={teams}
                    setTeams={setTeams}
                    teamIndex={teamIndex}
                ></MainScene>
            );
        case "PLAY":
            return (
                <PlayScene
                    user={user}
                    allPlayers={allPlayers}
                    teams={teams}
                    setTeams={setTeams}
                    setAllPlayers={setAllPlayers}
                ></PlayScene>
            );
        default:
            return (
                <MainScene
                    user={user}
                    allPlayers={allPlayers}
                    setAllPlayers={setAllPlayers}
                    teams={teams}
                    setTeams={setTeams}
                    teamIndex={teamIndex}
                ></MainScene>
            );
    }
}

function App(): JSX.Element {
    const [user, setUser] = useState<User>("League Manager");
    const [teams, setTeams] = useState<Team[]>([
        {
            name: "Default",
            players: [],
            lineup: [],
            wins: 0,
            losses: 0
        }
    ]);
    const [teamIndex, setTeamIndex] = useState<number>(0);
    const [scene, setScene] = useState<string>("MAIN");
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${soccer})`,
                backgroundSize: "cover"
            }}
        >
            <Header>
                <div className="flex content-center flex wrap dark:text-white justify-between">
                    <ThemeToggle></ThemeToggle>
                    <span className="text-4xl text-center pl-64 pt-8">
                        Soccer Fantasy Manager
                    </span>
                    <div className="flex flex-col end">
                        <div className="flex flex-row">
                            <UserDropDownButton
                                //logo={<BiUserCircle size={25} />}
                                user={user}
                                setUser={setUser}
                            ></UserDropDownButton>
                            {scene === "MAIN" ? (
                                <div className="block">
                                    <h1 className="pt-1">Select User:</h1>
                                    <TeamDropDownButton
                                        team={teams[teamIndex]}
                                        setTeamNum={setTeamIndex}
                                        teams={teams}
                                    ></TeamDropDownButton>
                                </div>
                            ) : null}
                        </div>
                        <div className="pl-48">
                            {user === "League Manager" && scene === "MAIN" && (
                                <AddTeamButton
                                    addTeam={(newTeam: Team) =>
                                        setTeams([
                                            ...teams,
                                            {
                                                ...newTeam
                                            }
                                        ])
                                    }
                                ></AddTeamButton>
                            )}
                        </div>
                    </div>
                </div>
            </Header>
            <hr></hr>
            <RenderCurrentScene
                scene={scene}
                user={user}
                allPlayers={allPlayers}
                setAllPlayers={setAllPlayers}
                teams={teams}
                setTeams={setTeams}
                teamIndex={teamIndex}
            ></RenderCurrentScene>
            <br></br>
            {/* Set Scene Button */}
            <br className="height:60px"></br>
            <div className="p-8">
                <Button
                    className="text-2xl text-center dark:text-white font-bold py-2 px-4 rounded-full hover:border-transparent bg-blue-500 hover:bg-blue-600"
                    onClick={() => setScene(scene === "MAIN" ? "PLAY" : "MAIN")}
                >
                    {scene === "MAIN"
                        ? "Simulation Mode"
                        : "Team Management Mode"}
                </Button>
            </div>
            <footer className="bg-neutral-50 dark:bg-neutral-900 dark:text-white p-4 text-2xl font-bold">
                Created by Trevor, Tyran, Mbiet, Shawn, & Gage
            </footer>
        </div>
    );
}

export default App;
