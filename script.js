//PONE EL CONTADOR A 0
var count_click = 0;

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World " + fname.value ;
  count_click = count_click + 1;
  document.getElementById("veces").innerHTML = "Veces saludada: " + count_click ;
}
