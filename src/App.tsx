import React from "react";
import "./App.css";
import { UserDropDownButton } from "./components/UserDropDownButton";
import PlayerCard from "./components/PlayerCard";
import { Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <h1>Soccer Manager</h1>
                            <h5>
                                Created By Trevor, Shawn, Tyran, Mbiet & Gage
                            </h5>
                        </Col>
                        <Col xs={2}>
                            <div>
                                <UserDropDownButton
                                    options={[
                                        "League Manager",
                                        "Team Manager",
                                        "Coach"
                                    ]}
                                ></UserDropDownButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
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
