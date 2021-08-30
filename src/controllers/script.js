let conductor_prueba = {
    "cedula": 70597654,
    "nombre": "Juan Manuel Trujillo",
}

let vehiculo_prueba = {
    cedula_conductor: conductor_prueba.cedula,
    placa: "HIK-420",
    capacidad: 4,
    modelo: "Audi A8",
    color: "Rojo",
    tipo_vhiculo: 'Automovil',
    foto: "",
    documento: "",
}

localStorage.setItem("conductor1", JSON.stringify(conductor_prueba))
localStorage.setItem(vehiculo_prueba.placa, JSON.stringify(vehiculo_prueba))

function changePage(page){
    switch(page){
        case 'vehiculo':
            window.location.replace("src/view/vehiculo.html");
            break
        case 'viaje':
            window.location.replace("src/view/viaje.html");
            break
        case 'calificar':
            window.location.replace("src/view/calificar.html");
            break
        case 'home':
            window.location.replace("index.html");
            break
    }
}
