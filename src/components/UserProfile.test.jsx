import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { fetchUser } from "../api/userApi";

jest.mock("../api/userApi", () => ({
  fetchUser: jest.fn(),
}));

test("shows loading state initially", () => {
  fetchUser.mockResolvedValueOnce({ name: "Solmaz" });
  render(<UserProfile />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders user data when API call succeeds", async () => {
  fetchUser.mockResolvedValueOnce({ name: "Solmaz" });

  render(<UserProfile />);

  expect(await screen.findByText(/name:\s*solmaz/i)).toBeInTheDocument();
});

test("shows error message when API call fails", async () => {
  fetchUser.mockRejectedValueOnce(new Error("Network error"));

  render(<UserProfile />);

  expect(await screen.findByRole("alert")).toHaveTextContent(/failed to load user/i);
});
