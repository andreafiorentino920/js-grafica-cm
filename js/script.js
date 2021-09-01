// Esercizio con dato caselle preso in input 
var c= parseInt(prompt("Da quante caselle vuoi comporre il campo???"));
for (var i = 1; i <= c; i++){
    document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
}
document.getElementById("campo").addEventListener("click",
function(event){
    event.target.classList.toggle("red");
    alert(event.target.innerHTML);
})

// Esercizio con 100 caselle
// for (var i = 1; i <= 100; i++){
//     document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
// }
// document.getElementById("campo").addEventListener("click",
// function(event){
//     event.target.classList.toggle("red");
//     alert(event.target.innerHTML);
// })