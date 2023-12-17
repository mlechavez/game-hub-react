import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("should render the logo", () => {
    render(<NavBar />);

    const imageElement = screen.getByAltText(/game hub/i);

    expect(imageElement).toBeInTheDocument();
  });
});
