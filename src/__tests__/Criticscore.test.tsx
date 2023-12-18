import { render, screen } from "@testing-library/react";
import CriticScore from "../components/CriticScore";

const convertHexToRGBA = (hexCode: string) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};

describe("CriticScore", () => {
  it("should render correctly", () => {
    render(<CriticScore score={90} />);

    const scoreElement = screen.getByText(/90/i);

    expect(scoreElement).toBeInTheDocument();
  });

  it("should render green color scheme when the score is greater than 75", () => {
    render(<CriticScore score={76} />);

    const scoreElement = screen.getByText(/76/i);

    expect(scoreElement).toHaveStyle({
      color: convertHexToRGBA("#9AE6B4"),
    });
  });

  it("should render yellow color scheme when the score is greater than 60", () => {
    render(<CriticScore score={61} />);

    const scoreElement = screen.getByText(/61/i);

    expect(scoreElement).toHaveStyle({
      backgroundColor: convertHexToRGBA("#FAF089"),
    });
  });
});
