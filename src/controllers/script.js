let conductor_prueba = {
    "cedula": 70597654,
    "nombre": "Juan Manuel Trujillo",

}

localStorage.setItem("conductor1", JSON.stringify(conductor_prueba))

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
