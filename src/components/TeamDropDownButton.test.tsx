import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TeamDropDownButton } from "../components/TeamDropDownButton";
import { Player } from "../interfaces/player";
import { Team } from "../interfaces/team";

const players: Player[] = [
    {
        name: "Player 1",
        position: "Forward",
        rating: 85,
        imageURL: "https://example.com/player1.jpg",
        editMode: false,
        age: 25,
        height: "6ft",
        teamHistory: ["Team A", "Team B"]
    },
    {
        name: "Player 2",
        position: "Defender",
        rating: 90,
        imageURL: "https://example.com/player2.jpg",
        editMode: false,
        age: 28,
        height: "5.9ft",
        teamHistory: ["Team B", "Team C"]
    },
    {
        name: "Player 3",
        position: "Goalkeeper",
        rating: 90,
        imageURL: "https://example.com/player3.jpg",
        editMode: false,
        age: 30,
        height: "6.1ft",
        teamHistory: ["Team C", "Team A"]
    },
    {
        name: "Player 4",
        position: "Midfielder",
        rating: 88,
        imageURL: "https://example.com/player4.jpg",
        editMode: false,
        age: 27,
        height: "5.11ft",
        teamHistory: ["Team A", "Team B"]
    }
];

const teams: Team[] = [
    { name: "Team A", players, lineup: players, wins: 10, losses: 5 },
    { name: "Team B", players, lineup: players, wins: 8, losses: 7 }
];

test("change selected team in TeamDropDownButton", () => {
    const setTeamNum = jest.fn();
    const { getByRole } = render(
        <TeamDropDownButton
            team={teams[0]}
            setTeamNum={setTeamNum}
            teams={teams}
        />
    );

    const dropdown = getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "Team B" } });

    expect(setTeamNum).toHaveBeenCalledWith(1);
});
