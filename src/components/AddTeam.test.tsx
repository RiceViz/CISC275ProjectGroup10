import React from "react";
import {
    render,
    fireEvent
    // getByTestId,
    // getByRole
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddTeamButton } from "./AddTeam";

// Create a mock function for the addTeam prop
const addTeamMock = jest.fn();

describe("AddUserButton", () => {
    it("renders without crashing", () => {
        render(<AddTeamButton addTeam={addTeamMock} />);
    });

    it("opens and closes the modal", () => {
        const { getByText } = render(<AddTeamButton addTeam={addTeamMock} />);

        // Click the "Add Team" button
        fireEvent.click(getByText("Add User"));

        // The modal should now be visible
        expect(getByText("Add")).toBeInTheDocument();

        // Click the "Cancel" button in the modal
        fireEvent.click(getByText("Cancel"));
    });

    it("calls the addTeam prop when the Add Team button in the modal is clicked", () => {
        const { getByText, getByLabelText } = render(
            <AddTeamButton addTeam={addTeamMock} />
        );

        // Click the "Add Team" button
        fireEvent.click(getByText("Add User"));

        // Enter some details for the new team
        fireEvent.change(getByLabelText("Name:"), {
            target: { value: "Test Team" }
        });
        fireEvent.change(getByLabelText("Wins:"), {
            target: { value: "10" }
        });
        fireEvent.change(getByLabelText("Losses:"), {
            target: { value: "5" }
        });
    });
});
