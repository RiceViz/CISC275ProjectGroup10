import { Player } from "../interfaces/player";
import { Team } from "../interfaces/team";
/*
 * Formula used to see which team wins the simulated game after the draft
 * @returns string: a message to the Team's coach that they won the game
 */
export function WinFormula(t1: Team, t2: Team): string {
    //the following 2 variables calculate total team rating
    const t1Rating: number = t1.players.reduce(
        (total, player) => total + player.rating,
        0
    );
    const t2Rating: number = t2.players.reduce(
        (total, player) => total + player.rating,
        0
    );
    //this variable calculates total rating in order to add randomness
    const totRating: number = t1Rating + t2Rating;
    //these variables give each team their odds, to be put into random func.
    const t1Odds: number = t1Rating / totRating;
    const t2Odds: number = t2Rating / totRating;
    //adds randomness:
    const rand: number = Math.random();
    return "";
} //end of winformula function
