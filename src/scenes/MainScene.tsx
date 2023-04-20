import React from "react";
import "../App.css";
import { UserDropDownButton } from "../components/UserDropDownButton";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Container, Row, Col } from "react-bootstrap";
import { User } from "../interfaces/user";

export function MainScene({ user }: { user: User }): JSX.Element {
    const allPlayers: Player[] = PlayerCreator();
    return (
        <div>
            <Row>
                <Col>
                    <div className="BoxedList">
                        All Players
                        <Lineup lineup={allPlayers} user={user}></Lineup>
                    </div>
                </Col>
                <Col>
                    <div className="BoxedList">Your Team</div>
                </Col>
                <Col>
                    <div className="BoxedList">Starting Lineup</div>
                </Col>
            </Row>
        </div>
    );
}
