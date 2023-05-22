import React from "react";
import {
    render,
    fireEvent
    // getByTestId
    // getByLabelText
} from "@testing-library/react";
import PlayerBanner, {
    RenderPlayerName,
    RenderPlayerRating,
    RenderEditSwitch
} from "./PlayerBanner";
import { Player } from "../interfaces/player";
import { User } from "../interfaces/user";

// Mock player and user data
const mockPlayer: Player = {
    name: "Player 1",
    position: "Defender",
    rating: 8,
    imageURL: "http://example.com/player1.jpg",
    editMode: false,
    age: 30,
    height: "6'2",
    teamHistory: ["Team A", "Team B"]
};

const mockUser: User = "League Manager";

// Mock function for setting player
const setPlayerMock = jest.fn();

describe("PlayerBanner Component", () => {
    it("renders without crashing", () => {
        const { getByText } = render(
            <PlayerBanner
                index={1}
                player={mockPlayer}
                setPlayer={setPlayerMock}
                user={mockUser}
                isPlayerEditable={true}
            />
        );
        expect(getByText("Player 1")).toBeInTheDocument();
    });

    // Test drag events
    // Add more tests as needed...
});

describe("RenderPlayerName Subcomponent", () => {
    it("renders player name in view mode", () => {
        const { getByText } = render(
            <RenderPlayerName
                editMode={false}
                playerName={mockPlayer.name}
                setPlayerName={jest.fn()}
            />
        );
        expect(getByText("Player 1")).toBeInTheDocument();
    });

    // Test edit mode
    // Add more tests as needed...
});

// Continue from the previous code

describe("RenderPlayerName Subcomponent", () => {
    it("renders player name in edit mode", () => {
        const setPlayerNameMock = jest.fn();
        const { getByDisplayValue } = render(
            <RenderPlayerName
                editMode={true}
                playerName={mockPlayer.name}
                setPlayerName={setPlayerNameMock}
            />
        );
        expect(getByDisplayValue("Player 1")).toBeInTheDocument();
    });
});

describe("RenderPlayerRating Subcomponent", () => {
    it("renders player rating in edit mode", () => {
        const setPlayerRatingMock = jest.fn();
        const { getByDisplayValue } = render(
            <RenderPlayerRating
                editMode={true}
                playerRating={mockPlayer.rating}
                setPlayerRating={setPlayerRatingMock}
            />
        );
        expect(getByDisplayValue("8")).toBeInTheDocument();
    });
});

describe("RenderEditSwitch Subcomponent", () => {
    it("checks edit switch", () => {
        const setEditModeMock = jest.fn();
        const { getByLabelText } = render(
            <RenderEditSwitch
                editMode={mockPlayer.editMode}
                setEditMode={setEditModeMock}
            />
        );
        const switchElement = getByLabelText("Edit") as HTMLInputElement;
        expect(switchElement.checked).toEqual(mockPlayer.editMode);
        fireEvent.click(switchElement);
        expect(setEditModeMock).toHaveBeenCalledTimes(1);
    });
});
