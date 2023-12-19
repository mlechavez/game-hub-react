import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  const onSearchHandler = jest.fn();
  it("should render the logo", () => {
    render(<NavBar onSearch={onSearchHandler} />);

    const imageElement = screen.getByAltText(/game hub/i);

    expect(imageElement).toBeInTheDocument();
  });
});
