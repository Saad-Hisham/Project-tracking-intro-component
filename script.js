// AOS.init();
const ham =document.getElementById("ham");
const close = document.getElementById("close");
const me = document.getElementById("me");
ham.onclick = function(){
    document.querySelector(".nav-bar ul").style.display="block"
    document.querySelector(".nav-bar ul").classList="open"

    ham.style.display="none"
    close.style.display = "block"
}
close.onclick = function(){
    document.querySelector(".nav-bar ul").classList="close"
    ham.style.display="block"
    close.style.display = "none"
}
me.onclick = function(){
   console.log( document.querySelector(".text").classList.toggle("show"))
}