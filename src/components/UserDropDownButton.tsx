/* eslint-disable no-extra-parens */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Team } from "../interfaces/team";
import { AddUserButton } from "./AddUser";

export function UserDropDownButton({
    logo,
    team,
    setTeam
}: {
    logo?: JSX.Element | null;
    team: Team;
    setTeam: (newTeam: Team) => void;
}): JSX.Element {
    const leagueManger: Team = {
        name: "League Manager",
        user: "LeagueManager",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };
    const teamManager: Team = {
        name: "Team Manager",
        user: "TeamManager",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };
    const coach: Team = {
        name: "Coach",
        user: "Coach",
        players: [],
        lineup: [],
        wins: 0,
        losses: 0
    };
    const options: Team[] = [leagueManger, teamManager, coach];
    const goBetween: string[] = [
        leagueManger.name,
        teamManager.name,
        coach.name
    ];

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
                        setTeam(options[ind]);
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
                addTeam={(team: Team) => setTeam(team)}
            ></AddUserButton>
        </div>
    );
}
