console.log("ajsndasd")

function calculadora(numUno, numDos, operacion){
   console.log(operacion(numUno, numDos))
}

function sumar (numUno, numDos){
    return numUno + numDos
}
function restar (numUno, numDos){
    return numUno - numDos
}

calculadora(10, 20, sumar)
calculadora(20, 20, restar)
calculadora(30, 30, function(numUno, numDos){
    return numUno * numDos
})
calculadora(50, 10, function(numUno, numDos){
    return numUno / numDos
} )


// funcion flecha //

const sumarFlecha = (numUno, numDos) => {
    return numUno + numDos
}
console.log(sumarFlecha(100, 100))


let imprimirMensaje = mensaje => console.log(mensaje)

imprimirMensaje("te imprimo un msj")
    
let crearMultiplicacion = (numero1, numero2) => {
    let resultado = numero1 * numero2
    return resultado
}
console.log(crearMultiplicacion(2, 2))

//----------- Ejercicio 3 --------//

const array = [1,2,3,4,5,6,7,8,9]

const array2 = array.map(crearMultiplicacion)
console.log(array2)

//---------- Ejercicio 4----------//
console.log(beers)

let copiaBeers = beers.map(cerveza =>  cerveza)

function cervezaGraduacion(arrayCervezas){
    arrayCervezas.sort((cervezaA, cervezaB) => cervezaA.abv - cervezaB.abv)
    let cervezasAlcoholicas = arrayCervezas.slice(15)
    return cervezasAlcoholicas
}
    
    
cervezaGraduacion(copiaBeers)
console.log(cervezaGraduacion(copiaBeers))
console.log(copiaBeers)

//---------- Ejerccio 5---------//

function amargorCerveza(arrayCervezas){
    arrayCervezas.sort((cervezaA, cervezaB) => cervezaA.ibu - cervezaB.ibu)
    let cervezaAmarga = arrayCervezas.slice(0, 10)
    return cervezaAmarga
    
}

console.log(amargorCerveza(copiaBeers))

//-------- Ejercicio 6--------//

function encontrarCerveza(arrayCervezas, nombreCerveza){
    const cervezaEncontrada = arrayCervezas.find(cerveza => cerveza.name === nombreCerveza)
    if (cervezaEncontrada) {
        return cervezaEncontrada
    } else {
        return "No se encontro ninguna cerveza con ese nombre"
    }
}
console.log(encontrarCerveza(beers, "Trashy Blonde"))

//--------Ejercicio 7-------//


function buscaCervezaIbu(arrayCervezas, ibu){
    const cervezaEncontrada = arrayCervezas.find(cerveza => cerveza.ibu === ibu)
    if (cervezaEncontrada) {
        return cervezaEncontrada
    } else {
        return console.log(`No existe cerveza con un ibu de ${ibu}`) 
    }
}
console.log(buscaCervezaIbu(beers, 60))
console.log(buscaCervezaIbu(beers, 4))

//--------Ejercicio 8-------//

function encontrarPosicionCerveza(nombreCerveza, arrayCervezas) {
    const indice = arrayCervezas.findIndex((cerveza) => cerveza.name === nombreCerveza);
  
    if (indice !== -1) {
      return `La cerveza ${nombreCerveza} se encuentra en la posición ${indice} del array.`;
    } else {
      return `${nombreCerveza} no existe en el array.`;
    }
  }

  console.log(encontrarPosicionCerveza("Berliner Weisse With Yuzu - B-Sides", beers))

  //------ Ejercicio 9---------//

  //Tengo que hacer una funcion que reciba un array de cervezas y un valor de alcohol
  //Me tiene que retornar un nuevo array con las cervezas que no excedan el nivel etilico (=<)
  //El nuevo array debe ser un objeto que tenga las propiedades nombre, alcohol (abv) y amargor (ibu)

  function filtrarCervezas(beers, nivelAlcohol) {
    const cervezasFiltradas = beers.filter(cerveza => cerveza.abv <= nivelAlcohol)
  
    const resultado = cervezasFiltradas.map(cerveza => {
      return {
        nombre: cerveza.name,
        alcohol: cerveza.abv,
        amargor: cerveza.ibu
      }
    })
  
    return resultado
  }

  console.log(filtrarCervezas(beers, 5))

  //-------Ejercicio 10-------//
  
    function ordenarCervezas(cervezas, nombrePropiedad, valorBooleano) {
      if (valorBooleano === true) {
        cervezas.sort((a, b) => a[nombrePropiedad] - b[nombrePropiedad]);
      } else if (valorBooleano === false) {
        cervezas.sort((a, b) => b[nombrePropiedad] - a[nombrePropiedad]);
      }
    
      const cervezasOrdenadas = cervezas.slice(0, 10);
    
      return cervezasOrdenadas;
    }

console.log(ordenarCervezas(beers, "ibu", false))

//--------Ejercicio 11--------//


   