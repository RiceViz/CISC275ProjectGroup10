import { Button } from "react-bootstrap";
import { Attackers } from "../components/PC";
import React from "react";

export function PlayerPosition(): JSX.Element {
    return (
        <div>
            <Button onClick={Attackers}> Attackers </Button>
        </div>
    );
}
