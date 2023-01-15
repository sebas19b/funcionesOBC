// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function devuelveTrue(){
    return true
}

const re = devuelveTrue()
console.log(re)
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const setTime = setTimeout(salidas, 5000)

function salidas() {
    console.log('Soy una promesa')
}
console.log(setTime)
// - Una función generadora de índices pares automáticos

function pares(){
    for (let i = 0; i < 10; i++) {
        let n =parseInt(Math.random() * 100)
        if (n % 2 == 0) {
            console.log(`Numeros pares encontrados ${n}`)
        }
    }
}
pares()