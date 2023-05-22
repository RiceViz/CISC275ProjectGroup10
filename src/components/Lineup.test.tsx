import React from "react";
import { render } from "@testing-library/react";
import { Lineup } from "./Lineup";
import { Player } from "../interfaces/player";
import { User } from "../interfaces/user";

// Prepare mock data
const mockPlayers: Player[] = [
    {
        name: "Player 1",
        position: "Defender",
        rating: 8,
        imageURL: "http://example.com/player1.jpg",
        editMode: false,
        age: 30,
        height: "6'2",
        teamHistory: ["Team A", "Team B"]
    },
    {
        name: "Player 2",
        position: "Forward",
        rating: 7,
        imageURL: "http://example.com/player2.jpg",
        editMode: false,
        age: 25,
        height: "6'1",
        teamHistory: ["Team B", "Team C"]
    }
];

const mockUser: User = "League Manager";

// Mock function for setting players
const setPlayersMock = jest.fn();

describe("Lineup component", () => {
    it("renders without crashing", () => {
        const { getByText } = render(
            <Lineup
                title="Test Lineup"
                players={mockPlayers}
                setPlayers={setPlayersMock}
                user={mockUser}
                playersEditable={true}
            />
        );
        expect(getByText("Test Lineup")).toBeInTheDocument();
    });

    it("renders players", () => {
        const { getByText } = render(
            <Lineup
                title="Test Lineup"
                players={mockPlayers}
                setPlayers={setPlayersMock}
                user={mockUser}
                playersEditable={true}
            />
        );
        expect(getByText("Player 1")).toBeInTheDocument();
        expect(getByText("Player 2")).toBeInTheDocument();
    });

    it("renders add player button for League Manager", () => {
        const { getByText } = render(
            <Lineup
                title="Test Lineup"
                players={mockPlayers}
                setPlayers={setPlayersMock}
                user={mockUser}
                playersEditable={true}
            />
        );
        expect(getByText("Add Player")).toBeInTheDocument();
    });

    it("does not render add player button for non-League Manager", () => {
        const nonManagerUser: User = "Coach";
        const { queryByText } = render(
            <Lineup
                title="Test Lineup"
                players={mockPlayers}
                setPlayers={setPlayersMock}
                user={nonManagerUser}
                playersEditable={true}
            />
        );
        expect(queryByText("Add Player")).not.toBeInTheDocument();
    });

    // Add more tests as needed
});
