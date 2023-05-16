export type Position = "Defender" | "Forward" | "Goalkeeper" | "Midfielder";

export interface Player {
    name: string;
    position: Position;
    rating: number;
    imageURL: string;
    editMode: boolean;
    teamHistory: string[];
}
/**
 * Converts a player's position to an abbreviation
 */
export const posToAbbrev: Record<Position, string> = {
    Defender: "D",
    Forward: "F",
    Goalkeeper: "G",
    Midfielder: "M"
};

export const abbrevToPos: Record<string, Position> = {
    D: "Defender",
    F: "Forward",
    G: "Goalkeeper",
    M: "Midfielder"
};

export function checkIdenticalURLs(p1: Player, p2: Player) {
    return p1.imageURL === p2.imageURL;
}

export function checkIdenticalPlayers(p1: Player, p2: Player) {
    return (
        p1.imageURL === p2.imageURL &&
        p1.name === p2.name &&
        p1.position === p2.position &&
        p1.rating === p2.rating
    );
}
