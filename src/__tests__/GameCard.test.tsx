import { render, screen } from "@testing-library/react";
import { Game } from "../hooks/useGames";
import GameCard from "../components/GameCard";

describe("GameCard", () => {
  let game: Game;

  beforeEach(() => {
    game = {
      id: 1,
      name: "Grand Theft Auto V",
      background_image: "",
      parent_platforms: [],
    };
    render(<GameCard game={game} />);
  });

  it("should render the image", () => {
    const imageElement = screen.getByAltText(game.name);

    expect(imageElement).toBeInTheDocument();
  });

  it("should render the title", () => {
    const textElement = screen.getByText(game.name);

    expect(textElement).toBeInTheDocument();
  });
});
