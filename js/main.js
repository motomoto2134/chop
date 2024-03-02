let button = document.getElementById("pom");
let copr = document.querySelector("lol")
let coba = document.querySelector("basker_content")
let bank = 0
function buy(){

if (button.classList.contains("poiActive") ) { 
button.classList.remove("poiActive");
button.innerHTML = "купить";
} else{
    button.classList.add("poiActive");
button.innerHTML = "купили";

}



}