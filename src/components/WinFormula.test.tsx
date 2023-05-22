import { WinFormula } from "./WinFormula";
import { Player } from "../interfaces/player";

describe("WinFormula", () => {
    const playerA: Player = {
        name: "A",
        position: "Defender",
        rating: 5,
        imageURL: "url",
        editMode: false,
        age: 25,
        height: "180cm",
        teamHistory: []
    };

    const playerB: Player = {
        name: "B",
        position: "Defender",
        rating: 10,
        imageURL: "url",
        editMode: false,
        age: 25,
        height: "180cm",
        teamHistory: []
    };

    it("returns 0 if the team lineup length is invalid", () => {
        const team1 = [playerA];
        const team2 = [playerB];
        expect(WinFormula(team1, team2)).toBe(0);
    });

    it("returns 1 if team 1 is stronger", () => {
        global.Math.random = () => 0; // This will ensure that team 1 always wins
        const team1 = Array(11).fill(playerB);
        const team2 = Array(11).fill(playerA);
        expect(WinFormula(team1, team2)).toBe(1);
    });

    it("returns 2 if team 2 is stronger", () => {
        global.Math.random = () => 1; // This will ensure that team 2 always wins
        const team1 = Array(11).fill(playerA);
        const team2 = Array(11).fill(playerB);
        expect(WinFormula(team1, team2)).toBe(2);
    });
});
