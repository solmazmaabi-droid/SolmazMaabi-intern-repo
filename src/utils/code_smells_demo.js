// src/code_smells_after.js
// Refactored version of the code smells examples (cleaner, clearer, and easier to maintain).

// --------------------------------------------------
// 1) Magic Numbers & Strings -> Use named constants
// --------------------------------------------------
const FREE_SHIPPING_THRESHOLD = 150;
const SHIPPING_RATE = 0.07;
const BASE_SHIPPING_FEE = 12.99;

function calculateShippingCost(orderTotal) {
  if (typeof orderTotal !== 'number' || Number.isNaN(orderTotal) || orderTotal < 0) {
    throw new Error('orderTotal must be a non-negative number');
  }

  if (orderTotal > FREE_SHIPPING_THRESHOLD) return 0;
  return orderTotal * SHIPPING_RATE + BASE_SHIPPING_FEE;
}

// --------------------------------------------------
// 2) Long Functions -> Split into small helpers + guard clauses
// --------------------------------------------------
function validateCart(cart) {
  if (!Array.isArray(cart) || cart.length === 0) {
    throw new Error('Cart is empty');
  }
}

function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyMemberDiscount(total, userType) {
  return userType === 'member' ? total * 0.9 : total;
}

function applyCoupon(total, couponValue) {
  if (!couponValue) return total;
  return Math.max(0, total - couponValue);
}

function roundToCents(value) {
  return Math.round(value * 100) / 100;
}

function processCheckout(cart, userType, couponValue) {
  validateCart(cart);

  const subtotal = calculateCartTotal(cart);
  const discounted = applyMemberDiscount(subtotal, userType);
  const afterCoupon = applyCoupon(discounted, couponValue);

  return roundToCents(afterCoupon);
}

// --------------------------------------------------
// 3) Duplicate Code -> Extract a reusable function
// --------------------------------------------------
function formatFullName(person) {
  return `${person.firstName.trim()} ${person.lastName.trim()}`;
}

// --------------------------------------------------
// 4) Large Class (God Object) -> Split responsibilities
// --------------------------------------------------
class AuthService {
  loginUser() {}

  logoutUser() {}
}

class UserProfileService {
  fetchUserProfile() {}

  updateUserProfile() {}
}

class BillingService {
  calculateSubscriptionPrice() {}

  chargeCreditCard() {}

  generateInvoice() {}
}

class NotificationService {
  sendConfirmationEmail() {}
}

// --------------------------------------------------
// 5) Deeply Nested Conditionals -> Guard clauses
// --------------------------------------------------
function canUserAccessFeature(user) {
  if (!user) return false;
  if (!user.isActive) return false;
  if (!user.subscription) return false;

  return user.subscription.plan === 'pro';
}

// --------------------------------------------------
// 6) Commented-Out Code -> Remove dead code, rely on Git history
// --------------------------------------------------
function loadUserData() {
  return fetch('/api/user').then((response) => response.json());
}

// --------------------------------------------------
// 7) Inconsistent Naming -> Use descriptive names
// --------------------------------------------------
function calculateSum(firstNumber, secondNumber) {
  const sum = firstNumber + secondNumber;
  return sum;
}
