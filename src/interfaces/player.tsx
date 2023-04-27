export type Position = "Defender" | "Forward" | "Goalkeeper" | "Midfielder";

export interface Player {
    name: string;
    position: Position;
    rating: number;
    imageURL: string;
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
