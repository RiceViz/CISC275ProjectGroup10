import { Player } from "./player";

export class Team {
    name: string;
    players: Player[];
    lineup: Player[];
    wins: number;
    losses: number;

    constructor(
        name: string,
        players: Player[],
        lineup: Player[],
        wins: number,
        losses: number
    ) {
        this.name = name;
        this.players = players;
        this.lineup = lineup;
        this.wins = wins;
        this.losses = losses;
    }
}
