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
  
  
    $("#logout").click(function(){
      console.log('Boton logout clickedo');
      firebase.auth().signOut();
    });
    
    firebase.auth().onAuthStateChanged(function(user){
      console.log("checking login state");
      if(user) {
        console.log("logged in");
        $("#user").text(user.email);
      } else {
        console.log("logged out");
        $("#user").text("");
        window.location = "index.html";
      }
    });
  });

  
  
  