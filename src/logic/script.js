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
