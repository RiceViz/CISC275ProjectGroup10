/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { Team } from "../interfaces/team";

export function TeamDropDownButton({
    team,
    setTeam,
    teams
}: {
    team: Team;
    setTeam: (newTeam: Team) => void;
    teams: Team[];
}): JSX.Element {
    return (
        <div>
            <Form.Group className="max-w-fit p-2" controlId="choices">
                <Form.Select
                    value={team.name}
                    onChange={(e) => {
                        const ind = teams
                            .map((a_team: Team): string => a_team.name)
                            .indexOf(e.target.value);
                        const ind2 = teams.findIndex(
                            (a_team: Team): boolean => a_team.name === team.name
                        );
                        teams[ind2] = team;
                        setTeam(teams[ind]);
                        console.log(
                            "Players: " +
                                teams[ind].players +
                                " Lineup: " +
                                teams[ind].lineup
                        );
                    }}
                >
                    {teams.map((teamOption: Team) => (
                        <option key={teamOption.name} value={teamOption.name}>
                            {teamOption.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
