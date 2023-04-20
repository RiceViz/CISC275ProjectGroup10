import React from "react";
import "../App.css";
import { UserDropDownButton } from "../components/UserDropDownButton";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Container, Row, Col } from "react-bootstrap";

export function MainScene(): JSX.Element {
    const allPlayers: Player[] = PlayerCreator();
    return (
        <div>
            <Container>
                <Row>
                    <UserDropDownButton
                        options={["League Manager", "Team Manager", "Coach"]}
                    ></UserDropDownButton>
                    <Col>
                        <div className="BoxedList">
                            All Players
                            <Lineup lineup={allPlayers}></Lineup>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}
