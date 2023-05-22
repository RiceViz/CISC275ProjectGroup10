import { render, fireEvent } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
    it("should render without crashing", () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByRole } = render(<ThemeToggle />);
        expect(getByRole("button")).toBeInTheDocument();
    });

    it("should toggle theme when clicked", () => {
        // eslint-disable-next-line react/react-in-jsx-scope
        const { getByRole } = render(<ThemeToggle />);
        fireEvent.click(getByRole("button"));
    });
});
