var config = {
  apiKey: "AIzaSyAvSVbMI64uTymgVz9OSR_XjLX35Z8Np7U",
  authDomain: "todos-11eff.firebaseapp.com",
  databaseURL: "https://todos-11eff.firebaseio.com",
  projectId: "todos-11eff",
  storageBucket: "todos-11eff.appspot.com",
  messagingSenderId: "205993627781"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeTodos(uid, todo, state) {
  var database_ref = firebase.database().ref('todo/' + uid);

  database_ref.set({
    id: uid,
    todo: todo,
    status: state
  });

  database_ref.on('value', function(snapshot) {
    if (snapshot.val() != null) {
      $('#todo-list').append("<li data-uid='"+uid+"'><div class='view'><input class='toggle' type='checkbox'><label>"+todo+"</label><button class='destroy'></button></div></li>");
      refreshCount();
    }
  });

  var newTodoKey = firebase.database().ref().child('todo').push().key;
}
