/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { Team } from "../interfaces/team";

export function TeamDropDownButton({
    team,
    setTeamNum,
    teams
}: {
    team: Team;
    setTeamNum: (newTeamNum: number) => void;
    teams: Team[];
}): JSX.Element {
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
                        setTeamNum(ind);
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
