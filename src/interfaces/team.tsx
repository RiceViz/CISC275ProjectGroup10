import { Player } from "./player";

export interface Team {
    coach: string;
    players: Player[];
    lineup: Player[];
    wins: number;
    losses: number;
}
