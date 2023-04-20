import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Container, Row, Col, Image } from "react-bootstrap";
import { toAbbrev } from "../interfaces/field";

export function PlayerBanner({ player }: { player: Player }): JSX.Element {
    return (
        <div className="PlayerBanner">
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col>{player.name}</Col>
                    <Col>
                        <Image
                            src={player.imageURL}
                            style={{ height: "64px" }}
                        />
                    </Col>
                    <Col>
                        Pos: {toAbbrev[player.position]}
                        <br></br>
                        Ovr: {player.rating}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
