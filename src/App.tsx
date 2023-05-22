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
    team,
    teams,
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
    team: Team;
    teams: Team[];
    setTeams: (teams: Team[]) => void;
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
                    team={team}
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
                    team={team}
                    teams={teams}
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
                    team={team}
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
    const [teams, setTeams] = useState<Team[]>([
        {
            name: "Default",
            players: [],
            lineup: [],
            wins: 0,
            losses: 0
        }
    ]);
    const [team, setTeam] = useState<Team>(teams[0]);
    const [scene, setScene] = useState<string>("MAIN");
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());
    const [yourTeamPlayers, setYourTeamPlayers] = useState<Player[]>(
        team.players
    );
    const [yourStartingLineUp, setYourStartingLineUp] = useState<Player[]>(
        team.lineup
    );
    const [yourTeamPlayers2, setYourTeamPlayers2] = useState<Player[]>(
        team.players
    );
    const [yourStartingLineUp2, setYourStartingLineUp2] = useState<Player[]>(
        team.lineup
    );
    function changeTeam(a_team: Team) {
        setTeam(a_team);
        setYourTeamPlayers(a_team.players);
        setYourStartingLineUp(a_team.lineup);
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
                                        team={team}
                                        setTeam={(team: Team) =>
                                            changeTeam(team)
                                        }
                                        teams={teams}
                                    ></TeamDropDownButton>
                                </div>
                            ) : null}
                        </div>
                        <div className="pl-48">
                            {user === "League Manager" && scene === "MAIN" && (
                                <AddTeamButton
                                    addTeam={(team: Team) =>
                                        setTeams([
                                            ...teams,
                                            {
                                                ...team,
                                                players: team.players.map(
                                                    (
                                                        a_player: Player
                                                    ): Player => ({
                                                        ...a_player
                                                    })
                                                ),
                                                lineup: team.lineup.map(
                                                    (
                                                        a_player: Player
                                                    ): Player => ({
                                                        ...a_player
                                                    })
                                                )
                                            }
                                        ])
                                    }
                                ></AddTeamButton>
                            )}
                        </div>
                    </div>
                </div>
            </Header>
            {/* <Header className="App-header">
                <div className="flex flex-col dark:text-white h-500">
                    <div className="flex justify-between p- flex-wrap h-500">
                        <ThemeToggle></ThemeToggle>
                        <Container className="flex justify-end flow-root">
                            <Row>
                                <div className="flex justify-end flex-col">
                                    <Col>
                                        <span className="flex justify-end">
                                            <UserDropDownButton
                                                //logo={<BiUserCircle size={25} />}
                                                user={user}
                                                setUser={setUser}
                                            ></UserDropDownButton>
                                        </span>
                                    </Col>
                                    <Col>
                                        <span className="text-4xl text-center dark:text-white h-500">
                                            Soccer Fantasy Manager
                                        </span>
                                        {scene === "MAIN" ? (
                                            <span className="flex justify-end">
                                                <TeamDropDownButton
                                                    team={team}
                                                    setTeam={(team: Team) =>
                                                        changeTeam(team)
                                                    }
                                                    teams={teams}
                                                ></TeamDropDownButton>
                                            </span>
                                        ) : null}
                                    </Col>
                                </div>
                                <Col>
                                    <div className="flex justify-end">
                                        <UserDropDownButton
                                            //logo={<BiUserCircle size={25} />}
                                            user={user}
                                            setUser={setUser}
                                        ></UserDropDownButton>
                                    </div>
                                </Col>
                                <Col>
                                    {scene === "MAIN" ? (
                                        <div className="flex justify-end">
                                            <TeamDropDownButton
                                                team={team}
                                                setTeamNum={(teamNum: number) =>
                                                    changeTeam(teams[teamNum])
                                                }
                                                teams={teams}
                                            ></TeamDropDownButton>
                                        </div>
                                    ) : null}
                                </Col>
                            </Row>
                            <Row>
                                {scene === "MAIN" ? (
                                    <span className="flex justify-end">
                                        {user === "League Manager" && (
                                            <AddTeamButton
                                                addTeam={(team: Team) =>
                                                    setTeams([
                                                        ...teams,
                                                        {
                                                            ...team,
                                                            players:
                                                                team.players.map(
                                                                    (
                                                                        a_player: Player
                                                                    ): Player => ({
                                                                        ...a_player
                                                                    })
                                                                ),
                                                            lineup: team.lineup.map(
                                                                (
                                                                    a_player: Player
                                                                ): Player => ({
                                                                    ...a_player
                                                                })
                                                            )
                                                        }
                                                    ])
                                                }
                                            ></AddTeamButton>
                                        )}
                                    </span>
                                ) : null}
                            </Row>
                        </Container>
                    </div>
                </div>
            </Header> */}
            <hr></hr>
            <RenderCurrentScene
                scene={scene}
                user={user}
                team={team}
                teams={teams}
                setTeams={setTeams}
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
