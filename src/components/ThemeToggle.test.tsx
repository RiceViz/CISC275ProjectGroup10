import { render, fireEvent } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
    it("should render without crashing", () => {
        const { getByRole } = render(<ThemeToggle />);
        expect(getByRole("button")).toBeInTheDocument();
    });

    it("should toggle theme when clicked", () => {
        const { getByRole } = render(<ThemeToggle />);
        fireEvent.click(getByRole("button"));
    });
});
