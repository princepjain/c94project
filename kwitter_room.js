const firebaseConfig = {
      apiKey: "AIzaSyDxqv_nKeTeacykoLaquKPMSM1TrwEkqgM",
      authDomain: "c93project-kwitter.firebaseapp.com",
      databaseURL: "https://c93project-kwitter-default-rtdb.firebaseio.com",
      projectId: "c93project-kwitter",
      storageBucket: "c93project-kwitter.appspot.com",
      messagingSenderId: "311766884263",
      appId: "1:311766884263:web:479c617561a4ed9d2ba082"
    };
    
    
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

