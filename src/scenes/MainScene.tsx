import React, { useState } from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { PlayerCreator } from "../components/PlayerCreator";
import { Row, Col } from "react-bootstrap";
import { User } from "../interfaces/user";

export function MainScene({ user }: { user: User }): JSX.Element {
    const [allPlayers, setAllPlayers] = useState<Player[]>(PlayerCreator());
    return (
        <div>
            <Row>
                <Col>
                    <div className="BoxedList">
                        All Players
                        <Lineup
                            players={allPlayers}
                            setPlayers={setAllPlayers}
                            user={user}
                        ></Lineup>
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
