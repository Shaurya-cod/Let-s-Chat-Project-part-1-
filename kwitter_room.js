
const firebaseConfig = {
      apiKey: "AIzaSyC78aGs0bFI40bNfur_oICvLw3Dk-f5jhE",
      authDomain: "let-s-chat--project.firebaseapp.com",
      projectId: "let-s-chat--project",
      storageBucket: "let-s-chat--project.appspot.com",
      messagingSenderId: "540268257327",
      appId: "1:540268257327:web:66d240e50f15dc99b526da"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      });});}
getData();

