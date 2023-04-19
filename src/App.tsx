import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";
import PlayerCard from "./components/PlayerCard";
import soccer from "./assets/soccer-landing.jpeg";
import { BiUserCircle } from "react-icons/bi";
import Header from "./components/Header";

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
                <div className="flex flex-col">
                    <div className="self-end">
                        <UserDropDownButton
                            logo={<BiUserCircle size={25} />}
                            options={[
                                "League Manager",
                                "Team Manager",
                                "Coach"
                            ]}
                        ></UserDropDownButton>
                    </div>
                    <h1 className="text-4xl text-center">
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
            <footer>Created by Trevor, Tyran, Mbiet, Shawn, & Gage</footer>
        </div>
    );
}

export default App;
