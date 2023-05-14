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
import { Team } from "./interfaces/team";

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
    const leagueManger: Team = {
        name: "League Manager",
        user: "LeagueManager",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };
    const options: Team[] = [leagueManger];
    const goBetween: string[] = [leagueManger.name];
    const [user, setUser] = useState<User>("LeagueManager");
    const [teams, setTeams] = useState<Team[]>(options);
    const [scene, setScene] = useState<string>("MAIN");
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());
    const [yourTeamPlayers, setYourTeamPlayers] = useState<Player[]>([]);
    const [yourStartingLineUp, setYourStartingLineUp] = useState<Player[]>([]);
    const [yourTeamPlayers2, setYourTeamPlayers2] = useState<Player[]>([]);
    const [yourStartingLineUp2, setYourStartingLineUp2] = useState<Player[]>(
        []
    );
    const [team1Wins, setTeam1Wins] = useState(0);
    const [team2Wins, setTeam2Wins] = useState(0);

    function simulateGame() {
        const result: number = WinFormula(
            yourStartingLineUp,
            yourStartingLineUp2
        );
        if (result === 1) {
            //if team1 wins
            setTeam1Wins((prev: number) => prev + 1);
            alert(
                // eslint-disable-next-line prettier/prettier
                `Congratulations Team 1, you win! Your current win-loss record is ${
                    team1Wins + 1
                }-${team2Wins}`
            );
        } else {
            if (result === 2) {
                //if team 2 wins
                setTeam2Wins((prev) => prev + 1);
                alert(
                    // eslint-disable-next-line prettier/prettier
                    `Congratulations Team 2, you win! Your current win-loss record is ${
                        team2Wins + 1
                    }-${team1Wins}`
                );
            } else {
                //if either team does not have exactly 11 players
                alert(
                    "Please ensure both teams have 11 Players in their lineups."
                );
            }
        }
    } //end of simulateGame (counts Ws and Ls)

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
                                team={teams[0]}
                                teams={teams}
                                goBetween={goBetween}
                                setTeams={setTeams}
                            ></UserDropDownButton>
                        </div>
                    </div>
                    <h1 className="text-4xl text-center dark:text-white">
                        Soccer Fantasy Manager
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
