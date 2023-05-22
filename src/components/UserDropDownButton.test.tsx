import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserDropDownButton from "./UserDropDownButton";

describe("UserDropDownButton", () => {
    it("renders without crashing", () => {
        const setUser = jest.fn();
        const { getByRole } = render(
            <UserDropDownButton user="League Manager" setUser={setUser} />
        );
        expect(getByRole("combobox")).toBeInTheDocument();
    });

    it("calls setUser function on selection change", () => {
        const setUser = jest.fn();
        const { getByRole } = render(
            <UserDropDownButton user="League Manager" setUser={setUser} />
        );

        fireEvent.change(getByRole("combobox"), { target: { value: "Coach" } });

        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith("Coach");
    });
});
