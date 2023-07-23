import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("ValidationStep Component", () => {
  it("should render with a green check icon and correct message when isValid is true", () => {
    const message = "Valid Step";

    // Check the existence of the green check icon and the correct message
    const checkIcon = screen.getByTestId("check-icon");
    expect(checkIcon).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();

    // Check the style properties
    expect(checkIcon).toHaveStyle("color: green");
  });

  it("should render with a red check icon and correct message when isValid is false", () => {
    const message = "Invalid Step";

    // Check the existence of the red check icon and the correct message
    const checkIcon = screen.getByTestId("check-icon");
    expect(checkIcon).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();

    // Check the style properties
    expect(checkIcon).toHaveStyle("color: red");
  });
});
