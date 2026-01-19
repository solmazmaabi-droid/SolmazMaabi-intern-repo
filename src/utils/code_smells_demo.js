function getShippingCost(total) {
  if (total > 100) return 0;
  return total * 0.08 + 9.95;
}