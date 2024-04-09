var iststus = document.querySelector("h5")

var add = document.querySelector("#add")
var remove = document.querySelector("#remove")

add.addEventListener("click",function(){
    iststus.innerHTML = "Trees, Animal"
    iststus.style.color = "green"
})

remove.addEventListener("click",function(){
    iststus.innerHTML = "Forest"
    iststus.style.color = "red"
})