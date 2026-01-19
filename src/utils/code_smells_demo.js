// src/code_smells_before.js
// This file intentionally contains multiple code smells for refactoring practice.

// --------------------------------------------------
// 1) Magic Numbers & Strings
// --------------------------------------------------
function calculateShippingCost(orderTotal) {
  if (orderTotal > 150) {
    return 0;
  }
  return orderTotal * 0.07 + 12.99;
}

// --------------------------------------------------
// 2) Long Functions (does too much)
// --------------------------------------------------
function processCheckout(cart, userType, couponValue) {
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

// --------------------------------------------------
// 3) Duplicate Code
// --------------------------------------------------
function formatCustomerName(customer) {
  return customer.firstName.trim() + " " + customer.lastName.trim();
}

function formatEmployeeName(employee) {
  return employee.firstName.trim() + " " + employee.lastName.trim();
}

// --------------------------------------------------
// 4) Large Class (God Object)
// --------------------------------------------------
class UserManager {
  loginUser() {}
  logoutUser() {}
  fetchUserProfile() {}
  updateUserProfile() {}
  calculateSubscriptionPrice() {}
  chargeCreditCard() {}
  sendConfirmationEmail() {}
  generateInvoice() {}
}

// --------------------------------------------------
// 5) Deeply Nested Conditionals
// --------------------------------------------------
function canUserAccessFeature(user) {
  if (user) {
    if (user.isActive) {
      if (user.subscription) {
        if (user.subscription.plan) {
          if (user.subscription.plan === "pro") {
            return true;
          }
        }
      }
    }
  }
  return false;
}

// --------------------------------------------------
// 6) Commented-Out Code
// --------------------------------------------------
function loadUserData() {
  // const cachedData = localStorage.getItem("user_data");
  // if (cachedData) {
  //   return JSON.parse(cachedData);
  // }

  return fetch("/api/user").then((response) => response.json());
}

// --------------------------------------------------
// 7) Inconsistent Naming
// --------------------------------------------------
function calc(a, b) {
  const tmp = a + b;
  return tmp;
}
