import { Player } from "./player";
import { User } from "./user";

export interface Team {
    name: string;
    user: User;
    players: Player[];
    lineup: Player[];
    wins: number;
    losses: number;
}

export const userToAbbrev: Record<User, string> = {
    LeagueManager: "LM",
    TeamManager: "TM",
    Coach: "C"
};

export const abbrevToUser: Record<string, User> = {
    LM: "LeagueManager",
    TM: "TeamManager",
    C: "Coach"
};
