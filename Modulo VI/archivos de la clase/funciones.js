


function ValidationCheckbox(){
    if(document.getElementById("masculino").checked){
        alert("Genero Masculino esta seleccionado")
    } 
    if(document.getElementById("femenino").checked) {
        alert("Genero Femenino esta seleccionado")
    }

}

function MayorNumero(){
    primerNumero = document.getElementById("n1").value;
    segundoNumero = document.getElementById("n2").value;
    
    if(primerNumero > parseInt(segundoNumero)) {
        alert("El primer numero es mayor")
    } else if (primerNumero < parseInt(segundoNumero)){
        alert("El segundo numero es mayor")
    }
}

function Suma(){
    var valor1 = document.getElementById("v1").value;
    var valor2 = document.getElementById("v2").value;
    var resultado = parseInt(valor1) + parseInt(valor2);
    alert("La suma de los dos numeros es: " + resultado)
}