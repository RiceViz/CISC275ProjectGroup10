import React from "react";
import { render, screen } from "@testing-library/react";
import { UserDropDownButton } from "./UserDropDownButton";

describe("UserDropDownButton Component tests", () => {
    test("There is a select box", () => {
        render(
            <UserDropDownButton user="League Manager" setUser={() => null} />
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
});
