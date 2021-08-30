function newViaje (id_viaje, cedula_conductor, placa_vehiculo, ciudad_de_partida, direccion_de_partida, fecha_de_partida, hora_de_partida,
                        ciudad_de_destino, direccion_de_destino, fecha_de_llegada, hora_de_llegada, asientos_disponibles,
                        tarifa, reserva_automatica, metodos_pago, descripcion) {

let jsonData = {"id": id_viaje,
"conductor": cedula_conductor,
"placa_vehiculo": placa_vehiculo,
"ciudad_de_partida": ciudad_de_partida,
"direccion_de_partida": direccion_de_partida,
"fecha_de_partida": fecha_de_partida,
"hora_de_partida": hora_de_partida,
"ciudad_de_destino": ciudad_de_destino,
"direccion_de_destino": direccion_de_destino,
"fecha_de_llegada":fecha_de_llegada,
"hora_de_llegada": hora_de_llegada,
"asientos_disponibles": asientos_disponibles,
"tarifa": tarifa,
"reserva_automatica": reserva_automatica,
"metodos_pago": metodos_pago,
"descripcion": descripcion
}

insert(jsonData)

}

function numeroViajes(){

    let contadorViajes = 0;
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).match("viaje")){
            contadorViajes++
        }
    }
    return contadorViajes;
}

function insert(viaje) {
    localStorage.setItem(viaje["id"], JSON.stringify(viaje))
    console.table(jsonData)
}

export {newViaje, numeroViajes};
