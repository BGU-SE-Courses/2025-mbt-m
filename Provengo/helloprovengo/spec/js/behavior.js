/* @provengo summon selenium */

bthread('', function () {
  let userSession = new SeleniumSession('user_session');
  let adminSession = new SeleniumSession('admin_session');

  userSession.start(URL)
  adminSession.start(ADMIN_URL);

  goToLogin(userSession)
  userLogin(userSession, userDetails.user.email, userDetails.user.password)
  addItemToCart(userSession)
  proceedToCheckout(userSession)
  addresses(userSession, userDetails.user.address, userDetails.user.city, userDetails.user.state, userDetails.user.zipCode, userDetails.user.country)
  shippingMethod(userSession)
  payment(userSession)
  orderConfirmation(userSession)

  addItemToCart(userSession)

  adminLogin(adminSession, userDetails.admin.email, userDetails.admin.password)
  deleteItem(adminSession)

  tryToBuyProduct(userSession) 
});
