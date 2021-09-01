for (var i = 1; i <= 100; i++){
    document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
}
var quadrato = document.getElementsByClassName("quadrato");
document.getElementById("campo").addEventListener("click",
function(event){
    event.target.classList.toggle("red");
    alert(event.target.innerHTML);
})