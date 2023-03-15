// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAegPHH2y3hRdYl5znHf4R-M_-hkpcFyIY",
    authDomain: "classtest-7bda5.firebaseapp.com",
    databaseURL: "https://classtest-7bda5-default-rtdb.firebaseio.com",
    projectId: "classtest-7bda5",
    storageBucket: "classtest-7bda5.appspot.com",
    messagingSenderId: "479687938652",
    appId: "1:479687938652:web:533c7ee9e1e9d47a2a4c99"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



