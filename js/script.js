for (var i = 1; i <= 100; i++){
    document.getElementById("campo").innerHTML += "<div class=\"quadrato\">"+i+"</div>";
}
document.getElementById("campo").addEventListener("click",
function(event){
    alert(event.target.innerHTML);
})