const { initializeApp } = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBh89RtEGcYz3INTFW_kzScAM76aodLtA8",
  authDomain: "bloodshare-94c37.firebaseapp.com",
  databaseURL: "https://bloodshare-94c37-default-rtdb.firebaseio.com",
  projectId: "bloodshare-94c37",
  storageBucket: "bloodshare-94c37.appspot.com",
  messagingSenderId: "282338631910",
  appId: "1:282338631910:web:b797c8905c60870b7d5b27",
  measurementId: "G-CCW4K9CET6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

$("#btn-login").click(function () {
  var email = $("#email").val();
  var password = $("#password").val();

  if (email != "" && password != "") {
    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function (error) {
      // Handle the error here
      console.error("An error occurred:", error);
    });
  } else {
    window.alert("PLEASE FILL THE FORM CORRECTLY");
  }
});
