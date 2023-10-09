/***************************************/
/*Ingresar nombre y apellido por PROMPT*/
/***************************************/
        
        var nuevoalumno = prompt("Ingresa tu nombre.");
        var lastname = prompt("Ingresa tu apellido.");
                
        listaalumnos = ["Laura", "Daniel", "Monica", "Susana", "Nahuel"]

        if(listaalumnos.includes(nuevoalumno)){
            alert("El visitante ya esta en la lista")    
            } else {listaalumnos.push(nuevoalumno)}

/***************************************/
/*Añadir nuevo enlace al primer parrafo*/
/***************************************/
        
        var primerP = document.getElementById("primerParrafo");
        
        primerP.innerHTML += (("<br>")+listaalumnos.join("<br>"));
        primerP.innerHTML += (("<br>")+`<a href="google.com">Otro enlace</a>`)
        
                
/*******************************************/
/*Nombre ingresado en mensaje de bienvenida*/
/*******************************************/
        
        window.onload = function() {           
            var info = document.getElementById("infopag");
            info.innerHTML = "Bienvenido/a " + nuevoalumno + "! Gracias por usar nuestra página web!";
                      
            
/*******************************************/
/*Número de enlaces que tiene la página*****/
/*******************************************/            
           
            var docuLinks = document.links.length;

            var contLinks = document.createElement("p");

            contLinks.innerHTML = "La cantidad de enlaces en esta página es: " + docuLinks;
            
            const contenedor= document.getElementById("infopag");
            contenedor.appendChild(contLinks);            
        }
        
/*******************************************/
/*Añadir nombre a la lista mediante un botón*/
/*******************************************/
        
        function añadirNombre(){
            var newList = document.createElement("li"),
                newName = document.createTextNode(nuevoalumno + " " + lastname);
            
            newList.appendChild(newName);
            
            var padre = document.getElementById("alumnos");
            padre.appendChild(newList);

            document.getElementById("bot1").style.display = "none";
            document.getElementById("bot2").style.display = "block";
        }
              
        
/**********************************************/
/*Retirar nombre de la lista mediante un botón*/
/**********************************************/
        
        function retirarNombre() {
            var remoList = document.getElementsByTagName("li")[5].parentNode,
                remoName = document.getElementsByTagName("li")[5];
            remoList.removeChild(remoName);

            document.getElementById("bot2").style.display = "none";
            document.getElementById("bot1").style.display = "block"
        }
        
/****************************************************/
/*Mostramos el contenido faltante del ultimo parrafo*/
/****************************************************/
          
        function muestra(){
            var elemento = document.getElementById("adicional"),
                elemento2 = document.getElementById("leerMenos");
            
            elemento.className="visible";
            elemento2.className="visible";
            
            var enlace = document.getElementById("enlace");
            enlace.className="oculto";  
            
        }
        
        function ocultarSpan() {
            var leerMenos = document.getElementById("adicional"),
                elemento2 = document.getElementById("leerMenos");
            
                leerMenos.className="oculto";
                elemento2.className="oculto";
            
            var enlace = document.getElementById("enlace");
            enlace.className="visible"; 
        }

/**********************************************/
/*Fincion para seleccionar genero             */
/**********************************************/

        function genero(gen){
            alert("Seleccionó el genero: " + gen)
        }



        function Compara(){
            let a = document.getElementById("n1").value;
            let b = document.getElementById("n2").value;
            
            if(a == "" || b == ""){
                alert("debe ingresar ambos numeros")
            }else{
                if(a > b){
                    alert("el enumero " + a + "es mayor al numero " + b)
                }else{alert("el numero " + b + " es mayor al numero " + a)
                
            }

        }}


        function Suma(){   
            let c = document.getElementById("v1").value;
            let d = document.getElementById("v2").value;
            
        if(c == "" || d == ""){
                alert('Debe ingresar ambos números para la suma');
            }else{  
                    alert('La suma es: '+ (parseFloat(c)+parseFloat(d)));
            }}
