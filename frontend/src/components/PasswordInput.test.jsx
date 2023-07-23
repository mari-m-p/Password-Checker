import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PasswordInput from "./PasswordInput";

describe("PasswordInput Component", () => {
  it("should render the input field with a password type by default", () => {
    render(<PasswordInput password="" onPasswordChange={() => {}} />);

    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should toggle the input type when the eye icon is clicked", () => {
    render(<PasswordInput password="" onPasswordChange={() => {}} />);

    const passwordInput = screen.getByLabelText("Password");
    const eyeIcon = screen.getByTestId("eye-icon");

    // Initially, the input type should be 'password'
    expect(passwordInput).toHaveAttribute("type", "password");

    // Click on the eye icon to toggle the input type
    fireEvent.click(eyeIcon);

    // The input type should change to 'text'
    expect(passwordInput).toHaveAttribute("type", "text");

    // Click on the eye icon again to toggle the input type back to 'password'
    fireEvent.click(eyeIcon);

    // The input type should be 'password' again
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("should call the onPasswordChange callback when the input value changes", () => {
    const mockCallback = jest.fn();
    render(<PasswordInput password="" onPasswordChange={mockCallback} />);

    const passwordInput = screen.getByLabelText("Password");

    // Simulate user typing in the input field
    fireEvent.change(passwordInput, { target: { value: "newPassword123" } });

    // The onPasswordChange callback should be called
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
