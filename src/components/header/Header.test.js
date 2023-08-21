import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("renders the title", () => {
  render(<Header />);
  expect(screen.getByText("La tía")).toBeInTheDocument();
});

it("renders the subtitle 'Menú del día'", () => {
  render(<Header />);
  expect(screen.getByText("Menú del día")).toBeInTheDocument();
});

it("renders the correct date format", () => {
  const date = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  const formattedDate = new Intl.DateTimeFormat("es-ES", options).format(date);

  render(<Header />);
  expect(screen.getByText(formattedDate)).toBeInTheDocument();
});