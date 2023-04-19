/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

export function UserDropDownButton({
    options,
    logo
}: {
    options: string[];
    logo?: JSX.Element | null;
}): JSX.Element {
    const [choice, setChoice] = useState<string>();

    function updateChoices(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    if (logo) {
        return (
            <Dropdown>
                <Dropdown.Toggle
                    className="focus:border-transparent dark:text-white"
                    variant="transparent"
                    id="dropdown-basic"
                >
                    {logo}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {options.map((choice: string) => (
                        <Dropdown.Item
                            key={choice}
                            eventKey={choice}
                            onSelect={updateChoices}
                        >
                            {choice}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    return (
        <div>
            {logo}
            <Form.Group className="max-w-fit p-2" controlId="choices">
                <Form.Select value={choice} onChange={updateChoices}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
