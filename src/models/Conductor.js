function getConductores(){
    let conductores = []
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).match("conductor")){
            conductores.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }            
    }
    return conductores
}

export {getConductores}