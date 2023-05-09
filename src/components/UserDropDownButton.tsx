/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Team } from "../interfaces/team";

export function UserDropDownButton({
    logo,
    team,
    setTeam
}: {
    logo?: JSX.Element | null;
    team: Team;
    setTeam: (newTeam: Team) => void;
}): JSX.Element {
    const leagueManger = new Team(
        "League Manager",
        "League Manager",
        [],
        [],
        0,
        0
    );
    const teamManager = new Team("Team Manager", "Team Manager", [], [], 0, 0);
    const coach = new Team("Coach", "Coach", [], [], 0, 0);

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
        </div>
    );
}
