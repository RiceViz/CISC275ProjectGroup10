import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Container, Row, Col, Image } from "react-bootstrap";
import { posToAbbrev } from "../interfaces/player";

/**
 * Makes a condensed player card
 *
 * @param player
 * @returns JSX.Element
 */
export function PlayerBanner({ player }: { player: Player }): JSX.Element {
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
