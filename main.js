var firebaseConfig = {
    apiKey: "AIzaSyAesY48whfXFduWRCMwJDOi0HcrvphgQcc",
    authDomain: "practice-activity-e7d22.firebaseapp.com",
    databaseURL: "https://practice-activity-e7d22-default-rtdb.firebaseio.com",
    projectId: "practice-activity-e7d22",
    storageBucket: "practice-activity-e7d22.appspot.com",
    messagingSenderId: "325627045243",
    appId: "1:325627045243:web:a53b20b5f981d48e6b49de"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addName(){
    user_name= document.getElementById("input1").value;
    user_age= document.getElementById("input2").value;
    user_school= document.getElementById("input3").value;
    firebase.database().ref("/").child(user_name).update({
        name: user_name,
        age: user_age,
        school: user_school
    });
document.getElementById("input1").value=" ";
document.getElementById("input2").value=" ";
document.getElementById("input3").value=" ";
}