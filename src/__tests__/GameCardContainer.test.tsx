import { render, screen } from "@testing-library/react";
import GameCardContainer from "../components/GameCardContainer";

describe("GameCardContainer", () => {
  jest.mock("../components/GameCard");

  it("should render correctly", () => {
    render(<GameCardContainer />);

    const parentElement = screen.getByTestId("gameCardContainer");

    expect(parentElement).toBeInTheDocument();
  });
});
