//import React, { useState } from "react";
//import { Button, Modal } from "react-bootstrap";
import { Player } from "../interfaces/player";

/*
 * Formula used to see which team wins the simulated game after the draft
 * @returns string: a message to the Team's coach that they won the game
 */
export function WinFormula(
    yourTeamPlayers: Player[],
    yourTeamPlayers2: Player[]
): string {
    //const [show, setShow] = useState(true);
    //const handleClose = () => setShow(false);
    //the following 2 variables calculate total team rating
    const t1Rating: number = yourTeamPlayers.reduce(
        (total, player) => total + player.rating,
        0
    );
    const t2Rating: number = yourTeamPlayers2.reduce(
        (total, player) => total + player.rating,
        0
    );
    //this variable calculates total rating in order to add randomness
    const totRating: number = t1Rating + t2Rating;
    //these variables give each team their odds, to be put into random func.
    const t1Odds: number = t1Rating / totRating; //.70
    //const t2Odds: number = t2Rating / totRating; //.30
    //adds randomness and weighs it based on odds above:
    const rand: number = Math.random(); //.89
    //const weightedRand = rand - t2Odds; // =.59
    if (rand <= t1Odds) {
        return "Congratulations, Team 1 wins!";
    } else {
        return "Congratulations, Team 2 wins!";
    }

    /*const modal = (
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Winner</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {weightedRand < t2Odds
                    ? "Congratulations, Team 2 wins!"
                    : "Congratulations, Team 1 wins!"}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    className="bg-neutral-500 hover:bg-neutral-600"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return <div>{modal}</div>;*/
} //end of winformula function
