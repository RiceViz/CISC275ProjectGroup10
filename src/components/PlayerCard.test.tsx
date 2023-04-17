import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerCard from "./PlayerCard";

describe("PlayerCard Component tests", () => {
    test("There is a card", () => {
        render(
            <PlayerCard
                name="name"
                imageURL="image"
                position="position"
                rating={0}
            ></PlayerCard>
        );
        expect(screen.getByRole("card")).toBeInTheDocument();
    });
});
