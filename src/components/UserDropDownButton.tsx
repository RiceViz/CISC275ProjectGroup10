/* eslint-disable no-extra-parens */
import React from "react";
import { Form } from "react-bootstrap";
import { User } from "../interfaces/user";

export function UserDropDownButton({
    logo,
    user,
    setUser
}: {
    logo?: JSX.Element | null;
    user: User;
    setUser: (newUser: User) => void;
}): JSX.Element {
    const options: User[] = ["League Manager", "Team Manager", "Coach"];
    const goBetween: string[] = ["League Manager", "Team Manager", "Coach"];

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
                    value={user}
                    onChange={(e) => {
                        const ind = goBetween.indexOf(e.target.value);
                        setUser(options[ind]);
                    }}
                >
                    {options.map((userOption: User) => (
                        <option key={userOption} value={userOption}>
                            {userOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
