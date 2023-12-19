import { render, screen } from "@testing-library/react";
import PlatformIconList from "../components/PlatformIconList";
import { Platform } from "../hooks/usePlatforms";

describe("PlatformIconList", () => {
  let platforms: Platform[];

  beforeEach(() => {
    platforms = [
      { id: 1, name: "Windows", slug: "windows" },
      { id: 2, name: "Xbox", slug: "xbox" },
    ];
  });

  it("should render a list of platforms", () => {
    render(<PlatformIconList platforms={platforms} />);

    const listElements = screen.getAllByTestId("platforms");

    expect(listElements).toHaveLength(2);
  });
});
