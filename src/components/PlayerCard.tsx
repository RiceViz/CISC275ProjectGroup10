import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const size = "18rem";

export default function PlayerCard({
    name,
    position,
    rating,
    imageURL
}: Player) {
    return (
        <Card style={{ width: size }}>
            <CardHeader>{name}</CardHeader>
            <CardImg
                style={{ height: size }}
                src={imageURL}
                alt={imageURL}
            ></CardImg>
            Position: {position} Rating: {rating}
        </Card>
    );
}
