const { formatFullName } = require("./formatFullName");

test("formats first and last name correctly", () => {
  expect(formatFullName("Solmaz", "Maabi")).toBe("Solmaz Maabi");
});

test("trims extra whitespace", () => {
  expect(formatFullName("  Solmaz ", " Maabi ")).toBe("Solmaz Maabi");
});

test("throws error for empty values", () => {
  expect(() => formatFullName("", "Maabi")).toThrow();
});

test("throws error for invalid input types", () => {
  expect(() => formatFullName(null, "Maabi")).toThrow(TypeError);
});
