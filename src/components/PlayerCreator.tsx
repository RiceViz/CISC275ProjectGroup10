import "../App.css";
import { Player } from "../interfaces/player";

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
    function getPath(imgName: string): string {
        return process.env.PUBLIC_URL + "/images/playerimages/" + imgName;
    }

    const playerPool: Player[] = [
        {
            name: "Lionel Messi",
            position: "Forward",
            rating: 91,
            imageURL: getPath("messi.jpg"),
            editMode: false
        },
        {
            name: "Karim Benzema",
            position: "Forward",
            rating: 91,
            imageURL: getPath("benzema.png"),
            editMode: false
        },
        {
            name: "Erling Haaland",
            position: "Forward",
            rating: 88,
            imageURL: getPath("haaland.jpg"),
            editMode: false
        },
        {
            name: "Eden Hazard",
            position: "Forward",
            rating: 84,
            imageURL: getPath("hazard.png"),
            editMode: false
        },
        {
            name: "Robert Lewandowski",
            position: "Forward",
            rating: 91,
            imageURL: getPath("lewandowski.png"),
            editMode: false
        },
        {
            name: "Kylian Mbappe",
            position: "Forward",
            rating: 91,
            imageURL: getPath("mbappe.jpg"),
            editMode: false
        },
        {
            name: "Neymar Jr.",
            position: "Forward",
            rating: 89,
            imageURL: getPath("neymar.png"),
            editMode: false
        },
        {
            name: "Cristiano Ronaldo",
            position: "Forward",
            rating: 89,
            imageURL: getPath("ronaldo.png"),
            editMode: false
        },
        {
            name: "Mohamed Salah",
            position: "Forward",
            rating: 90,
            imageURL: getPath("salah.png"),
            editMode: false
        },
        {
            name: "Son Heung-min",
            position: "Forward",
            rating: 89,
            imageURL: getPath("son.png"),
            editMode: false
        },
        {
            name: "Alisson Becker",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("alisson.png"),
            editMode: false
        },
        {
            name: "Thibaut Courtois",
            position: "Goalkeeper",
            rating: 90,
            imageURL: getPath("courtois.png"),
            editMode: false
        },
        {
            name: "Ederson",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("ederson.png"),
            editMode: false
        },
        {
            name: "Manuel Neuer",
            position: "Goalkeeper",
            rating: 90,
            imageURL: getPath("neuer.png"),
            editMode: false
        },
        {
            name: "Jan Oblak",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("oblak.png"),
            editMode: false
        },
        {
            name: "Trent Alexander-Arnold",
            position: "Defender",
            rating: 87,
            imageURL: getPath("alexanderarnold.jpg"),
            editMode: false
        },
        {
            name: "Lucas Hernandez",
            position: "Defender",
            rating: 85,
            imageURL: getPath("hernandez.jpg"),
            editMode: false
        },
        {
            name: "Reece James",
            position: "Defender",
            rating: 84,
            imageURL: getPath("james.jpg"),
            editMode: false
        },
        {
            name: "Joao Cancelo",
            position: "Defender",
            rating: 88,
            imageURL: getPath("joaocancelo.jpg"),
            editMode: false
        },
        {
            name: "Marquinhos",
            position: "Defender",
            rating: 88,
            imageURL: getPath("marquinhos.png"),
            editMode: false
        },
        {
            name: "Andrew Robertson",
            position: "Defender",
            rating: 87,
            imageURL: getPath("robertson.jpg"),
            editMode: false
        },
        {
            name: "Ruben Dias",
            position: "Defender",
            rating: 88,
            imageURL: getPath("rubendias.jpg"),
            editMode: false
        },
        {
            name: "Antonio Rudiger",
            position: "Defender",
            rating: 87,
            imageURL: getPath("rudiger.jpg"),
            editMode: false
        },
        {
            name: "Virgil van Dijk",
            position: "Defender",
            rating: 90,
            imageURL: getPath("vandijk.jpg"),
            editMode: false
        },
        {
            name: "Walker Zimmerman",
            position: "Defender",
            rating: 85,
            imageURL: getPath("walker.jpg"),
            editMode: false
        },
        {
            name: "Bernardo Silva",
            position: "Midfielder",
            rating: 86,
            imageURL: getPath("bernardosilva.png"),
            editMode: false
        },
        {
            name: "Bruno Fernandes",
            position: "Midfielder",
            rating: 88,
            imageURL: getPath("brunofernandes.png"),
            editMode: false
        },
        {
            name: "Kevin De Bruyne",
            position: "Midfielder",
            rating: 91,
            imageURL: getPath("debruyne.png"),
            editMode: false
        },
        {
            name: "Kai Havertz",
            position: "Midfielder",
            rating: 85,
            imageURL: getPath("havertz.png"),
            editMode: false
        },
        {
            name: "Thomas Muller",
            position: "Midfielder",
            rating: 87,
            imageURL: getPath("muller.png"),
            editMode: false
        }
    ]; //end of playerPool (consists of all players)

    return playerPool;
} //end of func
