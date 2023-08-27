var men = document.querySelector("#menu")

var nav = document.querySelector("#part1")

var band = document.querySelector("#close")

nav.addEventListener("click", function(){
    men.style.left=0
})

band.addEventListener("click", function(){
    men.style.left="-100%"
})