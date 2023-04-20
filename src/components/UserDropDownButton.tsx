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
    const options: string[] = ["League Manager", "Team Manager", "Coach"];

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        console.log("updateUser called");
        const newUser: string = event.target.value;
        const isUser = (x: string): x is User => options.includes(x);
        if (isUser(newUser)) {
            setUser(newUser);
            return;
        }
        console.log("nothin");
    }

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
                <Form.Select value={user} onChange={updateUser}>
                    {options.map((userOption: string) => (
                        <option key={userOption} value={userOption}>
                            {userOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
