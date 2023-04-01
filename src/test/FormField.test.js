import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormField from "./FormField";

describe("<FormField />", () => {
  test("render username input", () => {
    render(<FormField />);

    const inputEl = screen.getByTestId("user-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("pass valid username to test user input field", () => {
    render(<FormField />);

    const inputEl = screen.getByTestId("user-input");
    userEvent.type(inputEl, "saikiran6694");

    expect(screen.getByTestId("user-input")).toHaveValue("saikiran6694");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  test("pass invalid username to test input value", () => {
    render(<FormField />);

    const inputEl = screen.getByTestId("user-input");
    userEvent.type(inputEl, "test");

    expect(screen.getByTestId("user-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual(
      "Please enter a valid username."
    );
  });
});
