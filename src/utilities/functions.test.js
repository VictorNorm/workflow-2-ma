import { returnPerson } from "./returnPerson.js";
import { spaceReplace } from "./spaceReplace.js";
import { subtract } from "./subtract.js";

test("testing returnPerson function", () => {
  expect(returnPerson("marcus", 30)).toEqual({ name: "marcus", age: 30 });
});

test("testing spaceReplace function", () => {
  expect(spaceReplace(" ")).toBe("-");
});

test("testing subtract function", () => {
  expect(subtract(10, 5)).toBe(5);
});

// ------------------------------------------------------------

// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("testing heading component", () => {
//   render(<App />);
//   const textToTest = screen.getByText(/Workflow 2/i);
//   expect(textToTest).toBeInTheDocument();
// });
