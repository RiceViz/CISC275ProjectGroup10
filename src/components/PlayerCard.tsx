import React from "react";
import "../App.css";
import { Player } from "../interfaces/player";

export default function PlayerCard({
    name,
    position,
    rating,
    imageURL
}: Player) {
    return (
        <div className="Player-card">
            <h1>{name}</h1>
            <h4>
                {position} rated: {rating}
            </h4>
            <div className="Player-card-image">{imageURL}</div>
        </div>
    );
}
