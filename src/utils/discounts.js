function calculateFinalPrice(price, userType, hasCoupon, couponValue) {
  let finalPrice = price;

  if (userType) {
    if (userType === "member") {
      if (hasCoupon) {
        if (couponValue && couponValue > 0) {
          finalPrice = price - couponValue;
          if (finalPrice < 0) {
            finalPrice = 0;
          }
        } else {
          finalPrice = price * 0.9;
        }
      } else {
        finalPrice = price * 0.9;
      }
    } else {
      if (hasCoupon) {
        if (couponValue && couponValue > 0) {
          finalPrice = price - couponValue;
          if (finalPrice < 0) {
            finalPrice = 0;
          }
        }
      }
    }
  }

  return Math.round(finalPrice * 100) / 100;
}

module.exports = { calculateFinalPrice };