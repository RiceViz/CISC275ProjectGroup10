import React from "react";
import "./App.css";
import soccer from "./assets/soccer-landing.jpeg";
import { MainScene } from "./scenes/MainScene";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import { BiUserCircle } from "react-icons/bi";
import { UserDropDownButton } from "./components/UserDropDownButton";

function App(): JSX.Element {
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

            <MainScene></MainScene>

            <footer className="bg-neutral-50 dark:bg-neutral-900 dark:text-white">
                Created by Trevor, Tyran, Mbiet, Shawn, & Gage
            </footer>
        </div>
    );
}

export default App;
