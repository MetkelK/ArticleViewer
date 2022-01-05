import Article from "./Article";
import { render, screen } from "@testing-library/react";
import { Story } from "./Interfaces";

const story: Story = {
  title: "title",
  byline: "byline",
  abstract: "abstract",
  url: "url",
  multimedia: {
    length: 3,
    0: {
      caption: "caption",
      copyright: "copyright",
      height: 640,
      width: 640,
      url: "url",
    },
  },
};

describe("Article", () => {
  it("Renders Article", () => {
    render(<Article story={story} />);
  });

  it("Article has Title", () => {
    render(<Article story={story} />);
    const title = screen.getByLabelText(/title/i);
    expect(title).toBeVisible();
  });

  it("Article has Byline", () => {
    render(<Article story={story} />);
    const title = screen.getByLabelText(/byline/i);
    expect(title).toBeVisible();
  });

  it("Article has Abstract", () => {
    render(<Article story={story} />);
    const title = screen.getByLabelText(/abstract/i);
    expect(title).toBeVisible();
  });

  it("Article has Author", () => {
    render(<Article story={story} />);
    const title = screen.getByLabelText(/author/i);
    expect(title).toBeVisible();
  });

  it("Article has Date", () => {
    render(<Article story={story} />);
    const title = screen.getByLabelText(/date/i);
    expect(title).toBeVisible();
  });
});
