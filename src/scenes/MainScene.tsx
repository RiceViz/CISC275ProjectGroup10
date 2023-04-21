import React from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Row, Col } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Button } from "react-bootstrap";
import { Position } from "../interfaces/player";

export function MainScene({ user }: { user: User }): JSX.Element {
    const allPlayers: Player[] = PlayerCreator();
    const GK = allPlayers.filter(
        (p: Player): boolean => p.position == "Goalkeeper"
    );

    return (
        <div>
            <Row>
                <Col>
                    <div className="BoxedList">
                        Goalkeepers
                        <Lineup lineup={GK} user={user}></Lineup>
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
