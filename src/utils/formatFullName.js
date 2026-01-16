function formatFullName(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    throw new TypeError("Inputs must be strings");
  }

  const first = firstName.trim();
  const last = lastName.trim();

  if (!first || !last) {
    throw new Error("Names cannot be empty");
  }

  return `${first} ${last}`;
}

module.exports = { formatFullName };
