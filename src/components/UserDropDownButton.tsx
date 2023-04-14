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
            <h3>User</h3>
            <Form.Group controlId="choices">
                <Form.Label>Select Your User Profile</Form.Label>
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
