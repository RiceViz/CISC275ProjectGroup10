import { Player } from "./player";

export interface Team {
    name: string;
    players: Player[];
    lineup: Player[];
    wins: number;
    losses: number;
}
