import "../App.css";
import { Player } from "../interfaces/player";

export function getPath(imgName: string): string {
    if (imgName === "") {
        return process.env.PUBLIC_URL + "/blankprofilepicture.png";
    } else if (imgName.slice(0, 4) === "http") {
        return imgName;
    } else {
        return process.env.PUBLIC_URL + "/images/playerimages/" + imgName;
    }
}

/**
 *
 * @returns Player[] - a list of promiment soccerplayers
 */
export function PlayerCreator(): Player[] {
    /**
     * Converts img name to the path to that image
     * @param imgName for example "messi.jpg"
     * @returns image path
     */

    const playerPool: Player[] = [
        {
            name: "Lionel Messi",
            position: "Forward",
            rating: 91,
            imageURL: getPath("messi.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Karim Benzema",
            position: "Forward",
            rating: 91,
            imageURL: getPath("benzema.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Erling Haaland",
            position: "Forward",
            rating: 88,
            imageURL: getPath("haaland.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Eden Hazard",
            position: "Forward",
            rating: 84,
            imageURL: getPath("hazard.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Robert Lewandowski",
            position: "Forward",
            rating: 91,
            imageURL: getPath("lewandowski.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Kylian Mbappe",
            position: "Forward",
            rating: 91,
            imageURL: getPath("mbappe.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Neymar Jr.",
            position: "Forward",
            rating: 89,
            imageURL: getPath("neymar.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Cristiano Ronaldo",
            position: "Forward",
            rating: 89,
            imageURL: getPath("ronaldo.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Mohamed Salah",
            position: "Forward",
            rating: 90,
            imageURL: getPath("salah.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Son Heung-min",
            position: "Forward",
            rating: 89,
            imageURL: getPath("son.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Alisson Becker",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("alisson.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Thibaut Courtois",
            position: "Goalkeeper",
            rating: 90,
            imageURL: getPath("courtois.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Ederson",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("ederson.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Manuel Neuer",
            position: "Goalkeeper",
            rating: 90,
            imageURL: getPath("neuer.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Jan Oblak",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("oblak.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Trent Alexander-Arnold",
            position: "Defender",
            rating: 87,
            imageURL: getPath("alexanderarnold.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Lucas Hernandez",
            position: "Defender",
            rating: 85,
            imageURL: getPath("hernandez.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Reece James",
            position: "Defender",
            rating: 84,
            imageURL: getPath("james.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Joao Cancelo",
            position: "Defender",
            rating: 88,
            imageURL: getPath("joaocancelo.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Marquinhos",
            position: "Defender",
            rating: 88,
            imageURL: getPath("marquinhos.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Andrew Robertson",
            position: "Defender",
            rating: 87,
            imageURL: getPath("robertson.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Ruben Dias",
            position: "Defender",
            rating: 88,
            imageURL: getPath("rubendias.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Antonio Rudiger",
            position: "Defender",
            rating: 87,
            imageURL: getPath("rudiger.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Virgil van Dijk",
            position: "Defender",
            rating: 90,
            imageURL: getPath("vandijk.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Walker Zimmerman",
            position: "Defender",
            rating: 85,
            imageURL: getPath("walker.jpg"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Bernardo Silva",
            position: "Midfielder",
            rating: 86,
            imageURL: getPath("bernardosilva.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Bruno Fernandes",
            position: "Midfielder",
            rating: 88,
            imageURL: getPath("brunofernandes.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Kevin De Bruyne",
            position: "Midfielder",
            rating: 91,
            imageURL: getPath("debruyne.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Kai Havertz",
            position: "Midfielder",
            rating: 85,
            imageURL: getPath("havertz.png"),
            editMode: false,
            lineup: "All Players"
        },
        {
            name: "Thomas Muller",
            position: "Midfielder",
            rating: 87,
            imageURL: getPath("muller.png"),
            editMode: false,
            lineup: "All Players"
        }
    ]; //end of playerPool (consists of all players)

    return playerPool;
} //end of func
