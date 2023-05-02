import { Player } from "./player";

export class Team {
    teamManager: string;
    coach: string;
    players: Player[];
    lineup: Player[];
    wins: number;
    losses: number;

    constructor(
        teamManager: string,
        coach: string,
        players: Player[],
        lineup: Player[],
        wins: number,
        losses: number
    ) {
        this.teamManager = teamManager;
        this.coach = coach;
        this.players = players;
        this.lineup = lineup;
        this.wins = wins;
        this.losses = losses;
    }
}
