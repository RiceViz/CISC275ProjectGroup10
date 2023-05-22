/* eslint-disable brace-style */
//import React, { useState } from "react";
//import { Button, Modal } from "react-bootstrap";
import { Player } from "../interfaces/player";

/*
 * Formula used to see which team wins the simulated game after the draft
 * @returns string: a message to the Team's coach that they won the game
 */
export function WinFormula(teamA: Player[], teamB: Player[]): number {
    //const [show, setShow] = useState(true);
    //const handleClose = () => setShow(false);
    //the following 2 variables calculate total team rating
    const t1Rating: number = teamA.reduce(
        (total, player) => total + player.rating,
        0
    );
    const t2Rating: number = teamB.reduce(
        (total, player) => total + player.rating,
        0
    );
    //this variable calculates total rating in order to add randomness
    const totRating: number = t1Rating + t2Rating;
    //these variables give each team their odds, to be put into random func.
    const t1Odds: number = t1Rating / totRating;
    //const t2Odds = 1 - t1Odds, not needed
    //adds randomness and weighs it based on odds above:
    const rand: number = Math.random(); //.89
    if (teamA === teamB) {
        return 3;
    }
    if (
        (teamA.length === 11 &&
            teamB.length === 11) ||
        (teamA.length === 5 && teamB.length === 5)
    ) {
        if (rand <= t1Odds) {
            return 1;
        } else {
            return 2;
        }
    } else {
        return 0;
    } //if else tree to use random number to determine winner

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
