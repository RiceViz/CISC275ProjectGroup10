/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import "./App.css";
import soccer from "./assets/soccer-landing.jpeg";
import { MainScene } from "./scenes/MainScene";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { UserDropDownButton } from "./components/UserDropDownButton";
import { User } from "./interfaces/user";
import { PlayScene } from "./scenes/PlayScene";
import { Button, Form } from "react-bootstrap";

function App(): JSX.Element {
    const [user, setUser] = useState<User>("League Manager");
    const [scene, setScene] = useState<string>("Main");

    function changeSceneMain(): void {
        setScene("Main");
    }

    function changeScenePlay(): void {
        setScene("Play");
    }

    function simulateGame(): void {
        null;
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
                    <div className="flex justify-between">
                        <ThemeToggle></ThemeToggle>
                        <h1 className="text-5xl text-center dark:text-white">
                            Soccer Football Manager
                        </h1>
                        <div className="">
                            <UserDropDownButton
                                //logo={<BiUserCircle size={25} />}
                                user={user}
                                setUser={setUser}
                            ></UserDropDownButton>
                            <div>
                                {user === "Coach" || "Team Manager" ? (
                                    <Form>
                                        <input type="text" size="50" />
                                        <br></br>
                                        <input type="submit"></input>
                                    </Form>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </Header>
            <hr></hr>
            {scene === "Main" ? (
                <div>
                    <MainScene user={user}></MainScene>
                    <br></br>
                    <Button
                        className="text-2xl text-center dark:text-white"
                        onClick={changeScenePlay}
                    >
                        Simulation Mode
                    </Button>
                    <br></br>
                </div>
            ) : (
                <div>
                    <PlayScene user={user}></PlayScene>
                    <br></br>
                    <Button
                        className="text-2xl text-center dark:text-white"
                        onClick={simulateGame}
                    >
                        Simulate Game
                    </Button>
                    <br className="height:60px"></br>
                    <Button
                        className="text-2xl text-center dark:text-white"
                        onClick={changeSceneMain}
                    >
                        Team Management Mode
                    </Button>
                    <br></br>
                </div>
            )}
            <footer className="bg-neutral-50 dark:bg-neutral-900 dark:text-white">
                Created by Trevor, Tyran, Mbiet, Shawn, & Gage
            </footer>
        </div>
    );
}

export default App;
