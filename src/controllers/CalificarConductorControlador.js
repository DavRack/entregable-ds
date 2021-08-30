import {getConductores} from "../models/Conductor.js"
import {getVehiculosByCedula} from "../models/Vehiculo.js"
import {newCalificacion} from "../models/Calificacion.js"

let selectorNombres = document.getElementById("driver-name")
let selectorVehiculos = document.getElementById("driver-vehicle")

let star1 = document.getElementById("star1")
let star2 = document.getElementById("star2")
let star3 = document.getElementById("star3")
let star4 = document.getElementById("star4")
let star5 = document.getElementById("star5")

var calificacion = 0;

let starsText = document.getElementById("starsText")

let buttonCalificar = document.getElementById("buttonCalificar")

let comentarios = document.getElementById("observations")


for (let j of getConductores()){

    let opt = document.createElement('option');
    opt.value = j["cedula"];
    opt.innerHTML = j["nombre"];
    selectorNombres.appendChild(opt);

    let vehiculos_conductor_actual = getVehiculosByCedula(j["cedula"])
    let vehiculos_texto = ""
    console.log(vehiculos_conductor_actual)
    for (let vehiculo_actual of vehiculos_conductor_actual){
        if (vehiculos_conductor_actual.length == 1){
            vehiculos_texto = vehiculo_actual["modelo"]+" - "+vehiculo_actual["color"];
            break
        }
        vehiculos_texto += vehiculo_actual["modelo"]+" - "+vehiculo_actual["color"]+" | ";
    
    }
    selectorVehiculos.textContent = vehiculos_texto
}

star1.addEventListener("click", function(){
    star1.style.color="#D6B900";
    star2.style.color="black";
    star3.style.color="black";
    star4.style.color="black";
    star5.style.color="black";
    calificacion = 1;
    starsText.textContent = calificacion+" de 5 estrellas" 
})

star2.addEventListener("click", function(){
    star1.style.color="#D6B900";
    star2.style.color="#D6B900";
    star3.style.color="black";
    star4.style.color="black";
    star5.style.color="black";
    calificacion = 2;
    starsText.textContent = calificacion+" de 5 estrellas" 
})

star3.addEventListener("click", function(){
    star1.style.color="#D6B900";
    star2.style.color="#D6B900";
    star3.style.color="#D6B900";
    star4.style.color="black";
    star5.style.color="black";
    calificacion = 3;
    starsText.textContent = calificacion+" de 5 estrellas" 
})

star4.addEventListener("click", function(){
    star1.style.color="#D6B900";
    star2.style.color="#D6B900";
    star3.style.color="#D6B900";
    star4.style.color="#D6B900";
    star5.style.color="black";
    calificacion = 4;
    starsText.textContent = calificacion+" de 5 estrellas" 
})

star5.addEventListener("click", function(){
    star1.style.color="#D6B900";
    star2.style.color="#D6B900";
    star3.style.color="#D6B900";
    star4.style.color="#D6B900";
    star5.style.color="#D6B900";
    calificacion = 5;
    starsText.textContent = calificacion+" de 5 estrellas" 
})

buttonCalificar.addEventListener("click", function(){
    if(comentarios.value.length > 100){
        alert("La información del comentario supera el límite de cien caracteres")
        return
    }
    newCalificacion(selectorNombres.value, calificacion, document.getElementById("observations").textContent)
    alert("Califación enviada con éxito");
})





