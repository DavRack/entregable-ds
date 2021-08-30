import {newViaje, numeroViajes} from "../models/Viaje.js";

let vehicles = []
for (let i = 0; i < localStorage.length; i++){
    if (localStorage.key(i).match("-")){
        vehicles.push(localStorage.key(i))
        if(i == 0){
            document.getElementById("capacity").textContent = JSON.parse(localStorage.getItem(localStorage.key(i)))["capacidad"]
        }
    }
}

let select = document.getElementById('vehicle');

for (let j of vehicles){
    var opt = document.createElement('option');
    opt.value = j;
    opt.innerHTML = j;
    select.appendChild(opt);
}

let buttonAdd = document.getElementById("seats-add")
let buttonSub = document.getElementById("seats-sub")
let seats = document.getElementById("seats")
seats.textContent = 1

let departureDate = document.getElementById("date-departure")
let arriveDate = document.getElementById("date-arrive")

let departureTime = document.getElementById("time-departure")
let arriveTime = document.getElementById("time-arrive")
let buttonCreate  = document.getElementById("buttonCreate")

let directionDeparture = document.getElementById("direction-departure")
let cityDeparture = document.getElementById("city-departure")

let directionArrive = document.getElementById("direction-arrive")
let cityArrive = document.getElementById("city-arrive")

let rate = document.getElementById("rate")

let autoReserve = document.getElementById("auto-reserve")

let cash = document.getElementById("cash")
let card = document.getElementById("card")

let description = document.getElementById("observations")


select.addEventListener("change", function() {
    document.getElementById("capacity").textContent = JSON.parse(localStorage.getItem(select.value))["capacidad"]
});

buttonAdd.addEventListener("click", function() {
    seats.textContent = parseInt(seats.textContent) + 1
});

buttonSub.addEventListener("click", function() {
    if (parseInt(seats.textContent) > "1"){
        seats.textContent = parseInt(seats.textContent) - 1
    }
    
});

buttonCreate.addEventListener("click", function() {
    crearViaje()
});

function crearViaje(){

    let errorMsg;

    if (!directionDeparture.value || !directionArrive.value || !rate.value || !autoReserve.checked  || (!cash.checked && !card.checked)){
        errorMsg = "No se llenaron todos los campos obligatorios, por favor llene los campos faltantes"
    }
    else if (checkDate()){
        errorMsg = "La fecha seleccionada para la llegada/destino es anterior a la fecha actual"
    }
    else if (parseInt(seats.textContent) > parseInt(document.getElementById("capacity").textContent)){
        errorMsg = "La Cantidad de asientos ingresados es mayor que la capacidad del vehículo seleccionado"
    }
    else{
        errorMsg = ""
    }

    if (errorMsg){
        alert(errorMsg)
        return
    }
    let cedula_conductor = localStorage.getItem("conductor")
    let pagos = []

    if (cash.checked){
        pagos.push("Efectivo")
    }
    if (card.checked){
        pagos.push("Tarjeta")
    }


    newViaje("viaje"+(numeroViajes()+1), cedula_conductor, select.value, cityDeparture.value, directionDeparture.value.trim(), departureDate.value,
            departureTime.value, cityArrive.value, directionArrive.value.trim(), arriveDate.value, arriveTime.value, seats.textContent, rate.value,
            autoReserve.checked, pagos, description.value)
            
    alert("Viaje creado con exito") 

}

function checkDate() {

        const departureDateArray = departureDate.value.trim().split("-")
        const departureTimeArray = departureTime.value.trim().split(":")

        const arriveDateArray = arriveDate.value.trim().split("-")
        const arriveTimeArray = arriveTime.value.trim().split(":")

        const dateDeparture = new Date(departureDateArray[0], departureDateArray[1]-1, departureDateArray[2], departureTimeArray[0], departureTimeArray[1]);
        const dateArrive = new Date(arriveDateArray[0], arriveDateArray[1]-1, arriveDateArray[2], arriveTimeArray[0], arriveTimeArray[1]);

        console.log(dateDeparture , dateArrive)
        const actualDate = Date.now();

        if(dateDeparture < actualDate || dateArrive < actualDate){
            return true;
        }

}



    