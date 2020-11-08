//FIREBASE
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

  //RENDER
  function renderTable(){
      var order= firebase.database().ref("order/");
      order.on("child_added",function(data){
          var orderValue= data.val();
          document.getElementById("table").innerHTML+=`
          <tr>
          <td>${orderValue.id}</td>
          <td>${orderValue.order}</td>
          <td>${orderValue.total}</td>
          </tr>
          `;
      });
  };