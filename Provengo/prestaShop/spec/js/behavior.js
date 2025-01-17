/* @provengo summon selenium */

bthread('user buys product', function () {
  let s = new SeleniumSession('user_session');
  s.start(URL)
  buyProduct(s)
});

bthread('admin deletes product', function () {
  let s = new SeleniumSession('admin_session');
  s.start(ADMIN_URL);
  deleteProduct(s)
});

