import getCroppedImageUrl from "./image-url";

describe("image-url", () => {
  it("should render a default image when image is not available", () => {
    const url = "";
    const testValue = "../assets/no-image.webp";

    const croppedImageUrl = getCroppedImageUrl(url);

    expect(croppedImageUrl).toEqual(testValue);
  });

  it("should return the cropped image", () => {
    const url =
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg";
    const croppedImageUrl = getCroppedImageUrl(url);

    expect(croppedImageUrl).toContain("crop/600/400");
    expect(croppedImageUrl).toEqual(
      "https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    );
  });
});
