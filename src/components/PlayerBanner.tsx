import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Container, Row, Col, Image } from "react-bootstrap";
import { posToAbbrev } from "../interfaces/player";
import { User } from "../interfaces/user";

/**
 * Makes a condensed player card
 *
 * @param Player
 * @param User
 * @returns JSX.Element
 */
export function PlayerBanner({
    player,
    user
}: {
    player: Player;
    user: User;
}): JSX.Element {
    return (
        <div className="PlayerBanner">
            <Container>
                <Row className="d-flex align-items-center justify-content-center">
                    <Col sm={5}>{player.name}</Col>
                    <Col sm={3}>
                        <Image
                            src={player.imageURL}
                            style={{ height: "64px" }}
                        />
                    </Col>
                    <Col sm={4}>
                        Pos: {posToAbbrev[player.position]}
                        <br></br>
                        Ovr: {player.rating}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
