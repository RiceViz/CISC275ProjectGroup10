import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";
import PlayerCard from "./components/PlayerCard";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                CISC 275 Group 10 Website
                <h5>By Trevor, Shawn</h5>
            </header>

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
            ></PlayerCard>
        </div>
    );
}

export default App;
