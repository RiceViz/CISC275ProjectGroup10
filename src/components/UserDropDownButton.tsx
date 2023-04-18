/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function UserDropDownButton({
    options
}: {
    options: string[];
}): JSX.Element {
    const [choice, setChoice] = useState<string>();

    function updateChoices(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="choices">
                <Form.Label>Select User</Form.Label>
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
