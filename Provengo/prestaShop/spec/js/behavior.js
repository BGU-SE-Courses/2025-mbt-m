/* @provengo summon selenium */

let userSession = new SeleniumSession('user_session');
let adminSession = new SeleniumSession('admin_session');

bthread('buy product', function () {
  userSession.start(URL)
  userLogin(userSession)
  addProductToCart(userSession)
  proceedToCheckout(userSession)
  checkout(userSession)
});

bthread('delete product', function () {
  adminSession.start(ADMIN_URL);
  adminLogin(adminSession)
  searchProduct(adminSession)
  deleteProduct(adminSession)
});

bthread('correction', function () {
  sync({
    WaitFor: Event('End(checkout)', {EndEvent: true, session: userSession}),
    block: Event('Start(deleteProduct)', {StartEvent: true, session: adminSession})
  })
})