import "../App.css";
import { Player } from "../interfaces/player";

export function PlayerCreator(): Player[] {
    function getPath(imgName: string): string {
        return process.env.PUBLIC_URL + "/images/playerimages/" + imgName;
    }

    const playerPool: Player[] = [
        {
            name: "Lionel Messi",
            position: "Forward",
            rating: 91,
            imageURL: getPath("messi.jpg")
        },
        {
            name: "Karim Benzema",
            position: "Forward",
            rating: 91,
            imageURL: getPath("benzema.png")
        },
        {
            name: "Erling Haaland",
            position: "Forward",
            rating: 88,
            imageURL: getPath("haaland.jpg")
        },
        {
            name: "Eden Hazard",
            position: "Forward",
            rating: 84,
            imageURL: getPath("hazard.png")
        },
        {
            name: "Robert Lewandowski",
            position: "Forward",
            rating: 91,
            imageURL: getPath("lewandowski.png")
        },
        {
            name: "Kylian Mbappe",
            position: "Forward",
            rating: 91,
            imageURL: getPath("mbappe.jpg")
        },
        {
            name: "Neymar Jr.",
            position: "Forward",
            rating: 89,
            imageURL: getPath("neymar.png")
        },
        {
            name: "Cristiano Ronaldo",
            position: "Forward",
            rating: 89,
            imageURL: getPath("ronaldo.png")
        },
        {
            name: "Mohamed Salah",
            position: "Forward",
            rating: 90,
            imageURL: getPath("salah.png")
        },
        {
            name: "Son Heung-min",
            position: "Forward",
            rating: 89,
            imageURL: getPath("son.png")
        },
        {
            name: "Alisson Becker",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("alisson.png")
        },
        {
            name: "Thibaut Courtois",
            position: "Goalkeeper",
            rating: 90,
            imageURL: getPath("courtois.png")
        },
        {
            name: "Ederson",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("ederson.png")
        },
        {
            name: "Manuel Neuer",
            position: "Goalkeeper",
            rating: 90,
            imageURL: getPath("neuer.png")
        },
        {
            name: "Jan Oblak",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("oblak.png")
        },
        {
            name: "Trent Alexander-Arnold",
            position: "Defender",
            rating: 87,
            imageURL: getPath("alexanderarnold.jpg")
        },
        {
            name: "Lucas Hernandez",
            position: "Defender",
            rating: 85,
            imageURL: getPath("hernandez.jpg")
        },
        {
            name: "Reece James",
            position: "Defender",
            rating: 84,
            imageURL: getPath("james.jpg")
        },
        {
            name: "Joao Cancelo",
            position: "Defender",
            rating: 88,
            imageURL: getPath("joaocancelo.jpg")
        },
        {
            name: "Marquinhos",
            position: "Defender",
            rating: 88,
            imageURL: getPath("marquinhos.png")
        },
        {
            name: "Andrew Robertson",
            position: "Defender",
            rating: 87,
            imageURL: getPath("robertson.jpg")
        },
        {
            name: "Ruben Dias",
            position: "Defender",
            rating: 88,
            imageURL: getPath("rubendias.jpg")
        },
        {
            name: "Antonio Rudiger",
            position: "Defender",
            rating: 87,
            imageURL: getPath("rudiger.jpg")
        },
        {
            name: "Virgil van Dijk",
            position: "Defender",
            rating: 90,
            imageURL: getPath("vandijk.jpg")
        },
        {
            name: "Walker Zimmerman",
            position: "Defender",
            rating: 85,
            imageURL: getPath("walker.jpg")
        },
        {
            name: "Bernardo Silva",
            position: "Midfielder",
            rating: 86,
            imageURL: getPath("bernardosilva.png")
        },
        {
            name: "Bruno Fernandes",
            position: "Midfielder",
            rating: 88,
            imageURL: getPath("brunofernandes.png")
        },
        {
            name: "Kevin De Bruyne",
            position: "Midfielder",
            rating: 91,
            imageURL: getPath("debruyne.png")
        },
        {
            name: "Kai Havertz",
            position: "Midfielder",
            rating: 85,
            imageURL: getPath("havertz.png")
        },
        {
            name: "Thomas Muller",
            position: "Midfielder",
            rating: 87,
            imageURL: getPath("muller.png")
        }
    ]; //end of playerPool (consists of all players)

    return playerPool;
} //end of func
