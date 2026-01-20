// AFTER: Small, focused helper functions

function validateCart(cart) {
  if (!Array.isArray(cart) || cart.length === 0) {
    throw new Error("Cart is empty");
  }
}

function calculateCartTotal(cart) {
  return cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function applyMemberDiscount(total, userType) {
  return userType === "member" ? total * 0.9 : total;
}

function applyCoupon(total, couponValue) {
  if (!couponValue) return total;
  return Math.max(0, total - couponValue);
}

function roundToTwoDecimals(value) {
  return Math.round(value * 100) / 100;
}

function processOrder(cart, userType, couponValue) {
  validateCart(cart);

  const subtotal = calculateCartTotal(cart);
  const discounted = applyMemberDiscount(subtotal, userType);
  const afterCoupon = applyCoupon(discounted, couponValue);

  return roundToTwoDecimals(afterCoupon);
}
