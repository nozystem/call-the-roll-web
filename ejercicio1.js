// Codigo para pasar lista sobre una clase de alumnos con unos nombres ya definidos
// creado por: Sergio Rubio

// definimos todos los valores a 0 para reiniciar los valores cuando se pulse el boton
function pasarLista (nombreAlumno) {
    let respuestaDelPrompt = prompt(`Está ${nombreAlumno} en clase?`)
    return respuestaDelPrompt
}



let listaAlumnos =  ["Manuel", "Jose", "Fran", "Alberto"]
// let listaAlumnos =  ["Manuel", "Jose", "Fran", "Alberto", "Joel", "Hugo", "Maria", "Roser", "Esther", "Laura", "Oscar", "Marta", "Nerea", "Mario", "Cristina", "Auron", "Victor", "Fina", "Juan" ]
let listaRespuestas1 = []
let listaRespuestas2 = []
let listaRespuestas3 = []
let listaFaltas = []
let listaPresentes = []
let listaErrores = []
// res = ''
// result = undefined



function clearButton (p1, p2, p3) {

    prese = document.getElementById(p1)
    prese.style.padding = `0px`
    falt = document.getElementById(p2)
    falt.style.padding = `0px`;
    err = document.getElementById(p3)
    err.style.padding = `0px`;

    html0 = ''
    prese = undefined
    html1 = ''
    falt = undefined
    html2 = ''
    err = undefined

    listaRespuestas1 = []
    listaRespuestas2 = []
    listaRespuestas3 = []
    listaFaltas = []
    listaPresentes = []
    listaErrores = []

}

//-------------------------------Funcion1------------------------------//

function init(p1, p2, p3, lr1) {

    var prese = document.getElementById(p1)
    var falt = document.getElementById(p2)
    var err = document.getElementById(p3)
    var listresp = lr1
    // Popup que pide si cada alumno está en clase
    for (nombreAlumno of listaAlumnos) {
        let respuestaDeLaFuncion = pasarLista(nombreAlumno)
        listresp.push(respuestaDeLaFuncion)
    }

    // Guarda en 3 arrays distintos los que están, los que faltan y los indefinidos
    for (posicion in listaAlumnos) {

        if (listresp[posicion] == "si") {
            var presente = `El alumno llamado ${listaAlumnos[posicion]} si esta en clase` + `<br>`
            listaPresentes.push(presente)
            prese.style.padding = `8px`;
            prese.style.backgroundColor = `rgb(51, 204, 0, 0.5)`

        } else if (listresp[posicion] == "no") {
            var falta = `El alumno llamado ${listaAlumnos[posicion]} no esta en clase` + `<br>`
            listaFaltas.push(falta)
            falt.style.padding = `8px`;
            falt.style.backgroundColor = `rgb(255, 0, 0, 0.5)`

        } else {
            var indefinido = `La respuesta para el alumno ${listaAlumnos[posicion]} no es valida` + `<br>`
            listaErrores.push(indefinido)
            err.style.padding = `8px`;
            err.style.backgroundColor = `rgb(255, 255, 0, 0.5)`

        }
    }

    html0 = html0 + listaPresentes.join('')
    prese.innerHTML = html0
    
    html1 = html1 + listaFaltas.join('')
    falt.innerHTML = html1

    html2 = html2 + listaErrores.join('')
    err.innerHTML = html2   

console.log (listaRespuestas1)

}



//------------------- Porcentaje faltas----------------//
// function calcularPorcentaje (lr1){

//         var answers = lr1
//         correctAnswers = ["Lepenica", "Dec", "Leskovac"],
//         count = 0,
//         percent = '';
//     correctAnswers.forEach(){
//         if (answers.some()) return answers === correctAnswers; 
//             count++;
//     }

// percent = count * 100 / correctAnswers.length;
// document.write('Right Answers: '+count + ' Rate: ' + percent.toFixed(2) + ' %');
// }
