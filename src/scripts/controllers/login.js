angular
.module('LoginController', [
  'dgmTodo.auth',
  'dgmTodo.users',
])
.controller('LoginController', [
  'auth',
  'users',
  function (auth, users) {

    this.signin = function(email, password) {
      auth.login(email, password)
        .then(function(res) {
          console.log(res.data);
        })
        .catch(function(res) {
          console.log('error', res.data);
        });
    };

    this.signup = function(email, password) {
      users
        .create({
          email: email,
          password: password
        })
        .then(function(res) {
          console.log(res.data);
        })
        .catch(function(res) {
          console.log('error', res.data);
        });
    };

  },
]);
