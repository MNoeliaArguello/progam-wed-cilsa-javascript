let $hora = document.querySelector(".hora")
let $fecha = document.querySelector(".fecha");

function relojDigital(){
    let a = new Date();
    let number = a.getDate()
    let mes = a.getMonth()
    let year = a.getFullYear()
    let dia = a.getDay()
    let diasSemanas = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    let tdsMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let time = a.toLocaleTimeString();
    $hora.innerHTML = time;
    $fecha.innerHTML = `${diasSemanas[dia]} ${number} de ${tdsMeses[mes]}  ${year}`
}
setInterval( () => {
     relojDigital()
}, 1000);

