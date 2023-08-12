

function Validation (input) {
 const error = {};
if(input.name.length > 35){
    error.name = "debe ingresar hasta 35 caracteres"
}
if(!input.name.length){
    error.name = "Debe ingresar el nombre de la actividad"
}
if(input.difficulty <= 0 || input.difficulty > 5){
    error.difficulty = "Debe ingresar un numero del 1 al 5"
}
if(input.idPais.length === 0){
    error.idPais = "Debe ingresar por lo menos un pais!"
}
if(! typeof input.difficulty === "number"){
    error.difficulty = "Solo puede ingesar numeros"
}
if(input.season === "default"){
    error.season = "Debe ingresar una temporada"
}
console.log(input.idPais);

return error
}
export default Validation