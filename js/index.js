var config = {
  apiKey: "AIzaSyBDAUu4kxfhByYj3FE30ODEvlHvepSseeg",
  authDomain: "idea-dayra.firebaseapp.com",
  databaseURL: "https://idea-dayra.firebaseio.com",
  projectId: "idea-dayra",
  storageBucket: "idea-dayra.appspot.com",
  messagingSenderId: "558386996696"
};
firebase.initializeApp(config);

/*75099994d046df3ac8452840aed67511*/

$(document).ready(function(){
  console.log('Pagina cargada');

  $("#login").click(function(){
    console.log('Boton login clicleado');
    var email = $('#email').val();
    var password = $('#password').val();
    console.log(email,password);
    
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(function(error){
      alert(error.message);

    })
  });

  $("#logout").click(function(){
    console.log('Boton logout clickedo');
    firebase.auth().signOut();
  });

  $("#signup").click(function(){
    console.log('Boton signup clicleado');
    var email = $('#email').val();
    var password = $('#password').val();
    console.log(email,password);

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(function(error){
      alert(error.message);

    })
  });
  
  firebase.auth().onAuthStateChanged(function(user){
    console.log("checking login state");
    if(user) {
      console.log("logged in");
      $("#user").text(user.email);
      console.log(user);
      window.location = "app.html";
    } else {
      console.log("logged out");
      $("#user").text("");
    }
  });
});

