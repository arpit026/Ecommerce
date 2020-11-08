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
var products= JSON.parse(localStorage.getItem('cart'));
var cartItems = [];
var cart_n= document.getElementById('cart_n');
var table= document.getElementById('table');
var total=0;

//HTML
function tableHTML(i) {
    return `
        <tr>
        <th scope="row">${i+1}</th>
        <td><img style=width:90px;" src="${products[i].url}"></td>
        <td>${products[i].name}</td>
        <td>1</td>
        <td>${products[i].price}</td>
        </tr>
    `;
}
//BUY
function buy() {
    var d= new Date();
    var t = d.getTime();
    var counter=t;
    counter+=1;
    let db=firebase.database().ref("order/"+counter);
    let itemdb={
        id:counter,
        order:counter-895,
        total:total
    }
    db.set(itemdb);
    swal({
        position: 'center',
        type: 'success',
        title: 'Purchase made successfully',
        text: `Your purchase order is: ${itemdb.order}`,
        showConfirmButton:true,
        timer:50000
    });
    clean();
}

function clean() {
    localStorage.clear();
    for (let index = 0; index < products.length; index++) {
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    total=0;
    table.innerHTML=`
        <tr>
        <th></th>
        <th></th>
        <th></th>
        </tr>
        `;
        cart_n.innerHTML='';
        document.getElementById("btnBuy").style.display="none";
        document.getElementById("btnClean").style.display="none";
}
//RENDER
function render(){
    for (let index = 0; index < products.length; index++) {
        table.innerHTML+= tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    table.innerHTML+=`
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">Total: $${total}.00</th>
    </tr>
    <tr>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">
        <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">Clean Shopping Cart</button>
    </th>
    <th scope="col">
    <button id="btnBuy" onclick="buy()" class="btn btn-success">Buy</button>
    </th>
    </tr>
    `;
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML= `[${products.length}]`;
}