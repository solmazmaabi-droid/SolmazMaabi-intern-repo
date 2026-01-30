// src/components/Message.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";

test("renders the message text", () => {
  render(<Message />);
  expect(screen.getByText("Hello, Focus Bear!")).toBeInTheDocument();
});

test("shows text after button click", async () => {
  render(<Message />);

  const button = screen.getByRole("button", { name: /click me/i });
  await userEvent.click(button);

  expect(screen.getByText("Button clicked!")).toBeInTheDocument();
});
