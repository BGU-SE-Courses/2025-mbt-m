/* @provengo summon selenium */
/* @provengo summon textassertion */

function buyProduct(session){
  with(session){
    click(xpaths.home.goToLoginButton)
    writeText(xpaths.userLogin.emailInput, userDetails.user.email)
    writeText(xpaths.userLogin.passwordInput, userDetails.user.password)
    click(xpaths.userLogin.submitLoginButton)
    writeText(xpaths.home.searchField, "T-Shirt"+"\uE006")
    click(xpaths.searchResults.firstProduct)
    click(xpaths.product.addToCartButton)
    click(xpaths.cartPopUp.proceedToCheckoutButton)
    click(xpaths.cart.proceedToCheckoutButton)
    click(xpaths.addresses.continueButton)
    click(xpaths.shippingMethod.continueButton)
    click(xpaths.payment.payByCashButton)
    click(xpaths.payment.confirmTerms)
    click(xpaths.payment.placeOrderButton)
    assertText(xpaths.orderConfirmation.successMessage, "YOUR ORDER IS CONFIRMED", [TextAssertions.modifiers.Contains]);
  }
}

function deleteProduct(session){
  with(session){
    writeText(xpaths.adminLogin.emailInput, userDetails.admin.email)
    writeText(xpaths.adminLogin.passwordInput, userDetails.admin.password)
    click(xpaths.adminLogin.submitLoginButton)
    click(xpaths.adminOperations.catalogTab)
    click(xpaths.adminOperations.productsTab)
    writeText(xpaths.adminOperations.searchProductByName, "T-Shirt"+"\uE006")
    click(xpaths.adminOperations.productOptions)
    click(xpaths.adminOperations.delete)
    click(xpaths.adminOperations.confirm)
  }
}