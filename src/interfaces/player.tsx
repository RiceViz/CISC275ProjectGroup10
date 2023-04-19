export type Position = "Defender" | "Forward" | "Goalkeeper" | "Midfielder";

export interface Player {
    name: string;
    position: Position;
    rating: number;
    imageURL: string;
}
