var x = document.getElementById("emaila");
var p = document.getElementById("passworda");

document.getElementById("formA").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    if(x.value=="admin@gmail.com" && p.value=="qwerty") {
        swal({
            title:'Welcome',
            html: 'Access granted',
            type: 'success'
        });
        setTimeout(()=>{
            loadPage();
        },3000);
    } else {
        swal({
            title:'Error',
            html: 'Access denied',
            type: 'denied'
        });
    }
    function loadPage(){
        window.location.href="./admin/admin.html";
    }
});