function newCalificacion (cedula_conductor, puntuacion, comentario){
    let jsonData = {
        "cedula_conductor": cedula_conductor,
        "puntuacion": puntuacion,
        "comentario": comentario
    }
    
    console.log(jsonData)
    localStorage.setItem("calificacion", JSON.stringify(jsonData))


}

export {newCalificacion}