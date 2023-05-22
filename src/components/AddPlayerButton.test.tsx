import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AddPlayerButton } from "./AddPlayerButton";

// Create a mock function for the addPlayer prop
const addPlayerMock = jest.fn();

describe("AddPlayerButton", () => {
    it("renders without crashing", () => {
        render(<AddPlayerButton addPlayer={addPlayerMock} />);
    });

    it("opens and closes the modal", () => {
        const { getByText, queryByText } = render(
            <AddPlayerButton addPlayer={addPlayerMock} />
        );


        // Click the "Add Player" button
        fireEvent.click(getByText("Add Player"));

        // The modal should now be visible
        expect(getByText("Add")).toBeInTheDocument();

        // Click the "Cancel" button in the modal
        fireEvent.click(getByText("Cancel"));
    });

    it('calls the addPlayer prop when the "Add Player" button in the modal is clicked', () => {
        const { getByText, getByLabelText } = render(
            <AddPlayerButton addPlayer={addPlayerMock} />
        );

        // Click the "Add Player" button
        fireEvent.click(getByText("Add Player"));

        // Enter some details for the new player
        fireEvent.change(getByLabelText("Name:"), {
            target: { value: "Test Player" }
        });
        fireEvent.change(getByLabelText("Rating:"), {
            target: { value: "85" }
        });

        // Click the "Add Player" button in the modal
        fireEvent.click(getByText("Add"));

        // The addPlayer function should have been called with the new player details
        expect(addPlayerMock).toHaveBeenCalledWith({
            name: "Test Player",
            rating: 85,
            position: "Defender",
            imageURL: "",
            editMode: false,
            age: 0,
            height: "0'0",
            teamHistory: []
        });
    });
});
