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
            age: 35,
            height: "5'7",
            teamHistory: ["PSG", "Barcelona"]
        },
        {
            name: "Karim Benzema",
            position: "Forward",
            rating: 91,
            imageURL: getPath("benzema.png"),
            editMode: false,
            age: 35,
            height: "6'1",
            teamHistory: ["Real Madrid", "Lyon"]
        },
        {
            name: "Erling Haaland",
            position: "Forward",
            rating: 88,
            imageURL: getPath("haaland.jpg"),
            editMode: false,
            age: 22,
            height: "6'4",
            teamHistory: [
                "Borussia Dortmund",
                "FC Red Bull Salzburg",
                "Molde FK",
                "Bryne FK"
            ]
        },
        {
            name: "Eden Hazard",
            position: "Forward",
            rating: 84,
            imageURL: getPath("hazard.png"),
            editMode: false,
            age: 32,
            height: "5'9",
            teamHistory: ["Real Madrid", "Chelsea", "Lille"]
        },
        {
            name: "Robert Lewandowski",
            position: "Forward",
            rating: 91,
            imageURL: getPath("lewandowski.png"),
            editMode: false,
            age: 34,
            height: "6'1",
            teamHistory: [
                "Barcelona",
                "Bayern Munich",
                "Borussia Dortmund",
                "Lech Poznan"
            ]
        },
        {
            name: "Kylian Mbappe",
            position: "Forward",
            rating: 91,
            imageURL: getPath("mbappe.jpg"),
            editMode: false,
            age: 24,
            height: "5'10",
            teamHistory: ["PSG", "Monaco"]
        },
        {
            name: "Neymar Jr.",
            position: "Forward",
            rating: 89,
            imageURL: getPath("neymar.png"),
            editMode: false,
            age: 31,
            height: "5'9",
            teamHistory: ["PSG", "Barcelona", "Santos"]
        },
        {
            name: "Cristiano Ronaldo",
            position: "Forward",
            rating: 89,
            imageURL: getPath("ronaldo.png"),
            editMode: false,
            age: 38,
            height: "6'2",
            teamHistory: ["Al Nassr", "Manchester United", "Real Madrid"]
        },
        {
            name: "Mohamed Salah",
            position: "Forward",
            rating: 90,
            imageURL: getPath("salah.png"),
            editMode: false,
            age: 30,
            height: "5'9",
            teamHistory: ["Liverpool", "Roma", "Fiorentina"]
        },
        {
            name: "Son Heung-min",
            position: "Forward",
            rating: 89,
            imageURL: getPath("son.png"),
            editMode: false,
            age: 30,
            height: "6'0",
            teamHistory: [
                "Tottenham Hotspur",
                "Bayer Leverkusen",
                "Hamburger SV"
            ]
        },
        {
            name: "Alisson Becker",
            position: "Goalkeeper",
            rating: 89,
            imageURL: getPath("alisson.png"),
            editMode: false,
            age: 30,
            height: "6'4",
            teamHistory: ["Liverpool", "Roma", "Internacional"]
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
