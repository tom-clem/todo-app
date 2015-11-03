angular
.module('LoginController', [
  'dgmTodo.auth',
  'dgmTodo.users',
])
.controller('LoginController', [
  'auth',
  'users',
  function (auth, users) {

    this.inputType = 'signin';

    this.submit = function(email, password) {
      this[this.inputType](email, password)
        .then(function(res) {
          // TODO redirect to the todos page
          console.log('success');
        })
        .catch(function(res) {
          console.log(res.status, res.data);
        });
    };

    this.signin = function(email, password) {
      return auth.login(email, password);
    };

    this.signup = function(email, password) {
      return users
        .create({
          email: email,
          password: password
        })
        .then(function(res) {
          return auth.login(email, password);
        });
    };

  },
]);
