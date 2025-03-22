import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

function Component() {
  return <h1 data-testid="hello">Hello</h1>;
}

describe("Component", () => {
  it("renders the component", () => {
    render(<Component />);

    const element = screen.getByTestId("hello");
    expect(element).toBeInTheDocument();
  });
});
