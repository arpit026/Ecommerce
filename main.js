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


  //GLOBAL
  var products=[];
  var cartItems=[];
  var cart_n= document.getElementById("cart_n");
  //DIVS
  var cakeDiv=document.getElementById("cakeDiv");   
  var promotionDIV=document.getElementById("promotionDiv");
  var boxDIV=document.getElementById("boxDiv");
  //INFORMATION
  var CUPCAKE=[
      {name:'Cupcake #1',price:1},
      {name:'Cupcake #2',price:2},
      {name:'Cupcake #3',price:3},
      {name:'Cupcake #4',price:4}
  ];
  var PROMO=[
      {name:'Promotion',price:10}
  ];
  var BOX=[
      {name:'Cupcake Box',price:12}
    ];
  //HTML
  function HTMLcupcakeProduct(con){
      let URL = `images/cupcake${con}.jpg`;
      let btn = `btnCUPCAKE${con}`;
      return `  
            
                <div class="card mb-4 shadow-sm">
                    <div class="cardImg">
                        <img class="card-img-top" style="height:19rem;" src="${URL}" alt="Card Image"></img>
                    </div>
                    <div class="card-body">
                        <i style="color:orange;" class="fa fa-star"></i>
                        <i style="color:orange;" class="fa fa-star"></i>
                        <i style="color:orange;" class="fa fa-star"></i>
                        <i style="color:orange;" class="fa fa-star"></i>
                        <i style="color:orange;" class="fa fa-star"></i>
                        <p class="card-text">${CUPCAKE[con-1].name}</p>
                        <p class="card-text">Price:$${CUPCAKE[con-1].price}.00</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" onclick="cart2('${CUPCAKE[con-1].name}','${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                    <a style="color:inherit;" href="cart.html">Buy</a></button>
                                <button id="${btn}" type="button" onclick="cart('${CUPCAKE[con-1].name}','${CUPCAKE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>    
                            </div>
                            <small class="text-muted">Free Shipping</small>
                        </div>
                    </div>
                </div>
            </div>

      `
  }  

  function HTMLpromotionProduct(){
      let URL = `images/carousel/cup1.jpg`;
      let btn = `btnpromotion`;
      return ` 
      
        <div class="row featurette">
            <div class="col-md-7">
                <h2 id="Promotions" style="padding-top:70px;">Promotions</h2>
                <p class="lead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto deserunt facere, rem fugit consequuntur assumenda adipisci vitae cumque velit quam, in sunt! Corporis laboriosam exercitationem repellendus, recusandae iste ipsa?</p>
                <h3>$${PROMO[0].price}.00</h3>
                <button type="button" onclick="cart2('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">
                    <a style="color:inherit;" href="cart.html">Buy</a></button>
                    <button id="${btn}" type="button" onclick="cart('${PROMO[0].name}','${PROMO[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>    
            </div>  
                <div class="col-md-5">
                    <img src="images/carousel/cup1.jpg" width="400" height="500"></img>
                </div>
        </div>  
        
      `
  }

  function HTMLcupcakeboxProduct(){
    let URL = `images/carousel/cup3.jpg`;
    let btn = `btnBOX`;
    return ` 
    
      <div class="row featurette">
          <div class="col-md-7 order-md-2">
              <h2 id="Box" style="padding-top:70px;">Cupcake Box</h2>
              <p class="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi architecto deserunt facere, rem fugit consequuntur assumenda adipisci vitae cumque velit quam, in sunt! Corporis laboriosam exercitationem repellendus, recusandae iste ipsa?</p>
              <h3>$${BOX[0].price}.00</h3>
              <button type="button" onclick="cart2('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">
                  <a style="color:inherit;" href="cart.html">Buy</a></button>
                  <button id="${btn}" type="button" onclick="cart('${BOX[0].name}','${BOX[0].price}','${URL}','0','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>    
          </div>
              <div class="col-md-5 order-md-1">
                  <img src="images/carousel/cup3.jpg" width="400" height="300"></img>
              </div>
      </div>  
      
    `
  }

  //Animation
  function animation(){
      const toast=swal.mixin({
          toast:true,
          position:'top-end',
          showConfirmButton:false,
          timer:1000
      });
      toast({
          type:'success',
          title:'Added to shopping cart'
      })
  }

  //CART FUNCTIONS
  function cart(name,price,url,con,btncart){
      var item={
          name:name,
          price:price,
          url:url
      }
      cartItems.push(item);
      let storage = JSON.parse(localStorage.getItem("cart"));
      if (storage==null) {
          products.push(item);
          localStorage.setItem("cart", JSON.stringify(products));
      } 
      else {
          products=JSON.parse(localStorage.getItem("cart"));
          products.push(item);
          localStorage.setItem("cart", JSON.stringify(products));
      }
      products= JSON.parse(localStorage.getItem("cart"));
      cart_n.innerHTML=`[${products.length}]`;
      document.getElementById(btncart).style.display="none";
      animation();
  }

  function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } 
    else {
        products=JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
  }

  function render(){
      for (let index = 1; index <=4; index++) {
          cakeDiv.innerHTML+= `${HTMLcupcakeProduct(index)}`;
      }
      promotionDIV.innerHTML+=`${HTMLpromotionProduct()}`;
      boxDIV.innerHTML+=`${HTMLcupcakeboxProduct()}`;
      if (localStorage.getItem("cart")==null) {

      } else {
          products=JSON.parse(localStorage.getItem("cart"));
          cart_n.innerHTML=`[${products.length}]`;
      }

  };
