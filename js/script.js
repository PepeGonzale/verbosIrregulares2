const grid = document.querySelector('.grid')
const listaVerbos = verbos.length
const boton = document.querySelector('.btnn')
const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const botonResultado = document.getElementById('btn-resultado')
const resultado = document.querySelector('.aciertos')
const pantallaInicio = document.querySelector('.principal')
const estrellas = document.querySelector('.estrellas')
const nivel = document.getElementById('inicio')
const niveles = document.querySelector('.niveles')
const numeroEstrellas = 16
const relleno = "bi bi-star"

let verboRandom = 0;
let tiempoAdivinar= 0
let acierto = 0;
let nive = 0
let icono = ''

function metodoPrincipal (){
    creaEstrellas()
    eligeVerbo()
}
function eligeNivel(id){
    nive = parseInt(id, 10)
    niveles.innerHTML = "El nivel es: " + nive
}
function chequeaVerbo(){
    let verboLeido = document.getElementById('caja').value
  
    if(verbos[verboRandom][tiempoAdivinar] === verboLeido){
        
        eligeVerbo()
        acierto++
    }
    resultado.innerHTML = acierto
}
function creaEstrellas(){
    for (var i = 0; i < numeroEstrellas; i++){        
        icono += '<i class = "bi bi-star" id = "' + i + '"></i>'      
        estrellas.innerHTML = icono
              
    }
    
}
function eligeVerbo(){
    
    verboRandom = Math.floor(Math.random() * listaVerbos)
    tiempoAdivinar = Math.floor(Math.random() * 3)
    console.log(verbos[verboRandom][tiempoAdivinar])
    if (tiempoAdivinar === 0){
        boton1.innerHTML = '<input id= "caja" class ="form-control form-sl">'
    }
    else{
        boton1.innerHTML = verbos[verboRandom][0]
    }
    if (tiempoAdivinar === 1){
        boton2.innerHTML = '<input id= "caja" class ="form-control form-sl">'
    }
    else{
        boton2.innerHTML = verbos[verboRandom][1]
    }
    if (tiempoAdivinar === 2){
        boton3.innerHTML = '<input id= "caja" class ="form-control form-sl">'
    }
    else{
        boton3.innerHTML = verbos[verboRandom][2]
    }
   
}
boton.addEventListener('click', () => {
    eligeVerbo()
})
botonResultado.addEventListener('click', () => {
    chequeaVerbo()
})
console.log(verbos[verboRandom][tiempoAdivinar])
metodoPrincipal()




