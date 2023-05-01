import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerCard from "./PlayerCard";
import { Player } from "../interfaces/player";

const player1: Player = {
    name: "Trevor",
    position: "Midfielder",
    rating: 99,
    imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-hcNzaVT_7bwqJ3yQ5OzjejlSnVoX_1LureTRN99&s",
    editMode: false,
    lineup: "All Players"
};

describe("PlayerCard Component tests", () => {
    test("There is a card", () => {
        render(<PlayerCard player={player1}></PlayerCard>);
        expect(screen.getByRole("card")).toBeInTheDocument();
    });
});
