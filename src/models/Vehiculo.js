function getVehiculosByCedula(cedula){
    let vehiculos = []
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).match("-")){
            if (JSON.parse(localStorage.getItem(localStorage.key(i)))["cedula_conductor"] == cedula){
                vehiculos.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }             
    }
    return vehiculos
}

export {getVehiculosByCedula}