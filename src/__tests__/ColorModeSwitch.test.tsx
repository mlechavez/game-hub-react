import { render, screen } from "@testing-library/react";
import ColorModeSwitch from "../components/ColorModeSwitch";

describe("ColorModeSwitch", () => {
  it("should render correctly", () => {
    render(<ColorModeSwitch />);

    const textElement = screen.getByText(/dark mode/i);

    expect(textElement).toBeInTheDocument();
  });
});
