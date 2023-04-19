import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";
import PlayerCard from "./components/PlayerCard";
import soccer from "./assets/soccer-landing.jpeg";
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
                <div>
                    <div>Soo</div>
                </div>
            </Header>

            <hr></hr>
            <div>
                <UserDropDownButton
                    options={["League Manager", "Team Manager", "Coach"]}
                ></UserDropDownButton>
            </div>
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
