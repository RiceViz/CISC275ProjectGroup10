import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
    it("renders without crashing", () => {
        const { getByText } = render(<Header>Test Header</Header>);
        expect(getByText("Test Header")).toBeInTheDocument();
    });

    it("renders children props", () => {
        const { getByText } = render(<Header>Test Child Prop</Header>);
        expect(getByText("Test Child Prop")).toBeInTheDocument();
    });

    it("applies the correct class based on scroll direction", () => {
        const { container } = render(<Header>Test Header</Header>);

        expect(container.firstChild).toHaveClass("top-0");
        act(() => {
            window.pageYOffset = 500;
            fireEvent.scroll(window);
        });
        expect(container.firstChild).toHaveClass("-top-32");

        act(() => {
            window.pageYOffset = 100;
            fireEvent.scroll(window);
        });
        expect(container.firstChild).toHaveClass("top-0");
    });
});
