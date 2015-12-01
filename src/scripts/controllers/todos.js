angular
.module('TodosController', [
  'dgmTodo.auth',
  'dgmTodo.todos',
])
.controller('TodosController', [
  'auth',
  '$location',
  'todos',
  function (auth, $location, todos) {
    'use strict';

    var self = this;

    auth.isLoggedIn().then(function (currentUser) {
      if (!currentUser) {
        $location.url('/login');
      } else {
        self.currentUser = currentUser;
        readTodos();
      }
    });

    function readTodos() {
      todos.read(self.currentUser.id)
        .then(function (todoItems) {
          self.todos = todoItems;
        });
    }

  },
]);
