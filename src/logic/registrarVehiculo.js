buttonAdd = document.getElementById("capacityAdd")
buttonSub = document.getElementById("capacitySub")
buttonRegister = document.getElementById("registerButton")
placa = document.getElementById("placa")
color = document.getElementById("color")
vehicleType = document.getElementsByName("vehicleType")
auto = document.getElementById("auto")
capacity = document.getElementById("capacity")
capacity.textContent = 4
modelo = document.getElementById("modelo")
buttonAddPhotos = document.getElementById("addPhotosButton")
filePhoto = document.getElementById("addPhotos")

buttonAddDocument = document.getElementById("addDocumentButton")
fileDocument= document.getElementById("addDocuments")


let errorMsg;


buttonAdd.addEventListener("click", function() {
    capacity.textContent = parseInt(capacity.textContent) + 1
});

buttonSub.addEventListener("click", function() {
    if (parseInt(capacity.textContent) > "1"){
        capacity.textContent = parseInt(capacity.textContent) - 1
    }
});

buttonAddPhotos.addEventListener("click", function(){
    filePhoto.click();
});

filePhoto.addEventListener("change", function(){
    document.getElementById('infoActualPhoto').innerHTML="Foto subida correctamente";
    document.getElementById('infoActualPhoto').style.color="green";
});


buttonAddDocument.addEventListener("click", function(){
    fileDocument.click();
});

fileDocument.addEventListener("change", function(){
    document.getElementById('infoActualDocument').innerHTML="Foto subida correctamente";
    document.getElementById('infoActualDocument').style.color="green";
});


buttonRegister.addEventListener("click", function() {

    if (!modelo.value || !filePhoto.value || !fileDocument.value){
        errorMsg = "Por favor complete todos los campos y adjunte todos los documentos necesarios para poder registrar su vehículo"
    }
    else if (!placa.value.match(/\w{3}-\d{3}/g)){
        errorMsg = "Placa mal ingresada. Recuerde que el formato es LLL-NNN, siendo L una letra y N un número"
    }
    else{
        errorMsg = ""
    }
    
    if (errorMsg){
        window.alert(errorMsg)
        return
    }

    let jsonData = {
        placa: placa.value,
        capacidad: capacity.textContent,
        modelo: modelo.value,
        color: color.value,
        tipo_vhiculo: auto.checked? 'Automovil':'Motocicleta',
        foto: filePhoto.value,
        documento: fileDocument.value,
    }

    if (window.localStorage.getItem(placa.value) !== null){
        alert("Ya existe un vehículo registrado con la placa que ingresó")
        return
    }
    console.table(jsonData)
    window.localStorage.setItem(placa.value, JSON.stringify(jsonData))
    alert("Vehículo registrado con éxito")

});



