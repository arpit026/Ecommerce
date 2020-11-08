// Initialize Firebase(2)
var firebaseConfig = {
    apiKey: "AIzaSyBoVFUSUP9Mn0GrEDhQ0D025OdfGO5xACA",
    authDomain: "cupcake-768f0.firebaseapp.com",
    databaseURL: "https://cupcake-768f0.firebaseio.com",
    projectId: "cupcake-768f0",
    storageBucket: "cupcake-768f0.appspot.com",
    messagingSenderId: "872478843543",
    appId: "1:872478843543:web:e6dca8fdca895eccd6ffd2",
    measurementId: "G-9HT5CFQLLW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  //Reference for form collection(3)
  let formMessage = firebase.database().ref('register');
  
  //listen for submit event//(1)
  document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit);
  
  //Submit form(1.2)
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
  
    //send message values
    sendMessage(name, email, password);
  
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
  }
  
  //Send Message to Firebase(4)
  
  function sendMessage(name, email, password) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
      password: password
    });
  }
  