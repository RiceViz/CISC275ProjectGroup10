/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Team } from "../interfaces/team";
import { AddUserButton } from "./AddUser";
import { Player } from "../interfaces/player";

export function UserDropDownButton({
    logo,
    team,
    setTeams
}: {
    logo?: JSX.Element | null;
    team: Team;
    setTeams: (newTeam: Team[]) => void;
}): JSX.Element {
    const leagueManger: Team = {
        name: "League Manager",
        user: "LeagueManager",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };

    const options: Team[] = [leagueManger];
    const goBetween: string[] = [leagueManger.name];

    // const options: User[] = ["League Manager", "Team Manager", "Coach"];
    // const goBetween: string[] = ["League Manager", "Team Manager", "Coach"];

    // if (logo) {
    //     return (
    //         <Dropdown>
    //             <Dropdown.Toggle
    //                 className="focus:border-transparent dark:text-white"
    //                 variant="transparent"
    //                 id="dropdown-basic"
    //             >
    //                 {logo}
    //             </Dropdown.Toggle>
    //             <Dropdown.Menu>
    //                 {options.map((userOption: User) => (
    //                     <Dropdown.Item
    //                         key={userOption}
    //                         eventKey={userOption}
    //                         onSelect={updateUser}
    //                     >
    //                         {userOption}
    //                     </Dropdown.Item>
    //                 ))}
    //             </Dropdown.Menu>
    //         </Dropdown>
    //     );
    // }

    return (
        <div>
            {logo}
            <Form.Group className="max-w-fit p-2" controlId="choices">
                <Form.Select
                    value={team.name}
                    onChange={(e) => {
                        const ind = goBetween.indexOf(e.target.value);
                        setTeams([...options, options[ind]]);
                    }}
                >
                    {options.map((teamOption: Team) => (
                        <option key={teamOption.name} value={teamOption.name}>
                            {teamOption.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <AddUserButton
                addTeam={(team: Team) => setTeams([...options, team])}
            ></AddUserButton>
        </div>
    );
}
