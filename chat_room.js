const firebaseConfig = {
      apiKey: "AIzaSyAUTVfmACaq5gh6oD6OCiDfcg6JOu3sDeQ",
      authDomain: "social-foresttttttt.firebaseapp.com",
      databaseURL: "https://social-foresttttttt-default-rtdb.firebaseio.com",
      projectId: "social-foresttttttt",
      storageBucket: "social-foresttttttt.appspot.com",
      messagingSenderId: "895169138395",
      appId: "1:895169138395:web:aef9d8c0035ec92d78c6fe",
      measurementId: "G-KBXNTQC92T"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
