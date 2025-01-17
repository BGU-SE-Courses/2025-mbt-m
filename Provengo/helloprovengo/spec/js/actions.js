/* @provengo summon selenium */

// user actions
function goToLogin(session) {
  session.click(xpaths.home.goToLoginButton)
}

function userLogin(session, email, password) {
    session.writeText(xpaths.userLogin.emailInput, email)
    session.writeText(xpaths.userLogin.passwordInput, password)
    session.click(xpaths.userLogin.submitLoginButton)
}

function addItemToCart(session) {
  session.writeText(xpaths.home.searchField, "T-Shirt"+"\uE006")
  session.click(xpaths.searchResults.firstProduct)
  session.click(xpaths.product.addToCartButton)
}

function proceedToCheckout(session) {
  session.click(xpaths.cartPopUp.proceedToCheckoutButton)
  session.click(xpaths.cart.proceedToCheckoutButton)
}

function addresses(session) {
  session.click(xpaths.checkoutAdresses.continueButton)
}

function shippingMethod(session) {
  session.click(xpaths.shippingMethod.continueButton)
}

function payment(session) {
  session.click(xpaths.payment.payByCashButton)
  session.click(xpaths.payment.confirmTerms)
  session.click(xpaths.payment.placeOrderButton)
}

function orderConfirmation(session) {
  session.assertText(xpaths.orderConfirmation.successMessage, "YOUR ORDER IS CONFIRMED", [TextAssertions.modifiers.Contains]);
}

function tryToBuyProduct(session) {
  session.click(xpaths.cartPopUp.proceedToCheckoutButton)
  session.assertText(xpaths.cart.itemCounter, "0 items", [TextAssertions.modifiers.Contains]);
}

// admin actions
function adminLogin(session, email, password) {
  session.writeText(xpaths.adminLogin.emailInput, email)
  session.writeText(xpaths.adminLogin.passwordInput, password)
  session.click(xpaths.adminLogin.submitLoginButton)
}

function deleteItem(session) {
  session.click(xpaths.adminOperations.catalogTab)
  session.click(xpaths.adminOperations.productsTab)
  session.writeText(xpaths.adminOperations.searchProductByName, "T-Shirt"+"\uE006")
  session.click(xpaths.adminOperations.productOptions)
  session.click(xpaths.adminOperations.delete)
  session.click(xpaths.adminOperations.confirm)
}