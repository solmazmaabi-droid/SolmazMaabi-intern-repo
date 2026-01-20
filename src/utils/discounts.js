// src/utils/discount.js (AFTER)
const MEMBER_DISCOUNT_RATE = 0.1;

function clampToZero(value) {
  return value < 0 ? 0 : value;
}

function applyCoupon(price, couponValue) {
  if (!couponValue || couponValue <= 0) return price;
  return clampToZero(price - couponValue);
}

function applyMemberDiscount(price, userType) {
  if (userType !== 'member') return price;
  return price * (1 - MEMBER_DISCOUNT_RATE);
}

function roundToCents(value) {
  return Math.round(value * 100) / 100;
}

function calculateFinalPrice(price, userType, hasCoupon, couponValue) {
  if (typeof price !== 'number' || Number.isNaN(price) || price < 0) {
    throw new Error('price must be a non-negative number');
  }

  let finalPrice = applyMemberDiscount(price, userType);

  if (hasCoupon) {
    finalPrice = applyCoupon(finalPrice, couponValue);
  }

  return roundToCents(finalPrice);
}

module.exports = { calculateFinalPrice };
