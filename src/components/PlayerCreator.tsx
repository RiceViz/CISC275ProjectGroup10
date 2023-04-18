import "../App.css";
import { Player } from "../interfaces/player";

export function PlayerCreator() {
    const playerPool: Player[] = [
        {
            name: "Lionel Messi",
            position: "Forward",
            rating: 91,
            imageURL: "/playerimages/messi.jpg"
        },
        {
            name: "Karim Benzema",
            position: "Forward",
            rating: 91,
            imageURL: "/playerimages/benzema.png"
        },
        {
            name: "Erling Haaland",
            position: "Forward",
            rating: 88,
            imageURL: "/playerimages/haaland.jpg"
        },
        {
            name: "Eden Hazard",
            position: "Forward",
            rating: 84,
            imageURL: "/playerimages/hazard.png"
        },
        {
            name: "Robert Lewandowski",
            position: "Forward",
            rating: 91,
            imageURL: "/playerimages/lewandowski.png"
        },
        {
            name: "Kylian Mbappe",
            position: "Forward",
            rating: 91,
            imageURL: "/playerimages/mbappe.png"
        },
        {
            name: "Neymar Jr.",
            position: "Forward",
            rating: 89,
            imageURL: "/playerimages/neymar.png"
        },
        {
            name: "Cristiano Ronaldo",
            position: "Forward",
            rating: 89,
            imageURL: "/playerimages/ronaldo.png"
        },
        {
            name: "Mohamed Salah",
            position: "Forward",
            rating: 90,
            imageURL: "/playerimages/salah.png"
        },
        {
            name: "Son Heung-min",
            position: "Forward",
            rating: 89,
            imageURL: "/playerimages/son.png"
        },
        {
            name: "Alisson Becker",
            position: "Goalkeeper",
            rating: 89,
            imageURL: "/playerimages/alisson.png"
        },
        {
            name: "Thibaut Courtois",
            position: "Goalkeeper",
            rating: 90,
            imageURL: "/playerimages/courtois.png"
        },
        {
            name: "Ederson",
            position: "Goalkeeper",
            rating: 89,
            imageURL: "/playerimages/ederson.png"
        },
        {
            name: "Manuel Neuer",
            position: "Goalkeeper",
            rating: 90,
            imageURL: "/playerimages/neuer.png"
        },
        {
            name: "Jan Oblak",
            position: "Goalkeeper",
            rating: 89,
            imageURL: "/playerimages/oblak.png"
        }
    ];
} //end of func
