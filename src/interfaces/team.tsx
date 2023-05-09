import { Player } from "./player";
import { User } from "./user";

export class Team {
    name: string;
    user: User = "League Manager" || "Team Manager" || "Coach";
    players: Player[];
    lineup: Player[];
    wins: number;
    losses: number;

    constructor(
        name: string,
        user: User,
        players: Player[],
        lineup: Player[],
        wins: number,
        losses: number
    ) {
        this.name = name;
        this.user = user;
        this.players = players;
        this.lineup = lineup;
        this.wins = wins;
        this.losses = losses;
    }
}
