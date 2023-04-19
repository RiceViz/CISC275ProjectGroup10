import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const size = "18rem";

export default function PlayerCard({ player }: { player: Player }) {
    return (
        <Card style={{ width: size }}>
            <CardHeader>{player.name}</CardHeader>
            <CardImg
                style={{ height: size }}
                src={player.imageURL}
                alt={player.imageURL}
            ></CardImg>
            Position: {player.position} Rating: {player.rating}
        </Card>
    );
}
