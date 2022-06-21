const grid = document.querySelector('.grid')
const listaVerbos = verbos.length
const boton = document.querySelector('.btnn')
const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const botonResultado = document.getElementById('btn-resultado')
const resultado = document.querySelector('.aciertos')
const pantallaInicio = document.querySelector('.principal')
const nivel = document.getElementById('inicio')
const niveles = document.querySelector('.niveles')

let verboRandom = 0;
let tiempoAdivinar= 0
let acierto = 0;
let nive = 0

function eligeNivel(id){
    nive = parseInt(id, 10)
    niveles.innerHTML = nive
}
function chequeaVerbo(){
    let verboLeido = document.getElementById('caja').value
  
    if(verbos[verboRandom][tiempoAdivinar] === verboLeido){
        eligeVerbo()
        acierto++
    }
    resultado.innerHTML = acierto
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
eligeVerbo()




