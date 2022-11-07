//Declaramos variables
var operandoa;
var operandob;
var operacion;


/* se declararon varias variables llamando al documento */
function init(){
    //variables calculadora
    var resultado = document.getElementById('resultado');/* se estan declarando varias variables con elementos del html y su respectivo id */
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');




    //Eventos de click
uno.onclick = function(e){/* Estan llamando a la variable uno con la propiedad onclick para que cuando den click en el 1 se ejecute su respetiva funcion la cual es mostrarlo en el cuadro de resultado, lo mismo para con las otras variables */
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();/* aqui cuando le den a resetear de va a limpiar todo en le cuadro resultado */
}
suma.onclick = function(e){/* en esta parte se ejecuta una funcion la cual ejecuta el una suma si la el usuario le da click en el simbolo de suma y lo mismo para con las otros operadores matematicos*/
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

}











function limpiar(){
    resultado.textContent = "";
  }/* se declara la funcion limpiar, su objetivo es cuando se oprima una suma, resta, etc, no se dañe el resultado   */
  






  function resetear(){/* esta funcion resetea la calculadora para poder hacer una nueva ecuacion  */
    resultado.textContent = ""; /* esto parte bota el resultado */
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }










  function resolver(){/* esta funcion es para que se ejecute el respetivo una suma resta etc */
    var res = 0;
    switch(operacion){/* se crea un estructura de control, para que cuando se imprima un simnolo la calculador entienda si tiene que sumar, restar, dividir o multiplicar  */
      case "+":/* si ocurre el case de suma la opereacion suma */
        res = parseFloat(operandoa) + parseFloat(operandob);/* aqui el case 1 si suman va a seguir esta funcion ejecuntandola lo que hace el brake es que solo esta se ejecute rompe el codigo y solo se queda con este caso */
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;/* este opcion es por si el usuario se llega a equivocar pueda poner todo desde 0 ya que la variable res vale 0 */
  } 


    
  /* parte de modo oscuro */
    
