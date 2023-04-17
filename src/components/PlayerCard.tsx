import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";
import { Card, CardImg } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function PlayerCard({
    name,
    position,
    rating,
    imageURL
}: Player) {
    return (
        <Card style={{ width: "18rem" }}>
            <CardHeader>{name}</CardHeader>
            <CardImg
                style={{ height: "18rem" }}
                src={imageURL}
                alt={imageURL}
            ></CardImg>
            Position: {position} Rating: {rating}
        </Card>
    );
}
