import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Form, Container, Row, Col } from "react-bootstrap";
import { toAbbrev } from "../interfaces/field";

export function PlayerBanner({ player }: { player: Player }): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>{player.name}</Col>
                    <Col>
                        <img src={player.imageURL} />
                    </Col>
                    <Col>
                        Pos: {toAbbrev[player.position]} Ovr: {player.rating}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
