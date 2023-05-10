import React from "react";
import "../App.css";
import { Lineup } from "../components/Lineup";
import { Player } from "../interfaces/player";
import { Row, Col, Container } from "react-bootstrap";
import { User } from "../interfaces/user";

export function FieldScene({
    user,
    teamPlayers,
    startingLineup,
    setStartingLineup
}: {
    user: User;
    teamPlayers: Player[];
    startingLineup: Player[];
    setStartingLineup: (players: Player[]) => void;
}): JSX.Element {
    return <div></div>;
}
