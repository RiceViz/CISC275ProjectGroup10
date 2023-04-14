import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">CISC 275 Group 10 Website</header>
            <hr></hr>
            <div>
                <UserDropDownButton
                    options={["League Manager", "Team Manager", "Coach"]}
                ></UserDropDownButton>
            </div>
        </div>
    );
}

export default App;
