function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.20)";
}
window.addEventListener('mouseup', function(event){
    var box = document.getElementById('mySideNav');
    if(event.target != box && event.target.parentNode != box) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("content").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
    }
})
