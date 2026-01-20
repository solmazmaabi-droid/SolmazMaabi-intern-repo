// BEFORE: One large function with multiple responsibilities
function processOrder(cart, userType, couponValue) {
  if (!cart || cart.length === 0) {
    throw new Error("Cart is empty");
  }

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  if (userType === "member") {
    total = total * 0.9;
  }

  if (couponValue) {
    total = total - couponValue;
    if (total < 0) {
      total = 0;
    }
  }

  total = Math.round(total * 100) / 100;
  return total;
}
