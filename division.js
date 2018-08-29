//No funciona con numeros
function multiplicacion(a, b) {
    let total = 0;
    for (let i = 0; i < b; i++) {
        total = total + a
    }
    return total

}
function division(divisor, dividendo) {
    let esNegativo 
    console.log("El resultado de dividir " + divisor + " y " + dividendo);
    if (Math.sign(divisor) == -1|| Math.sign(dividendo) == -1) {
        esNegativo = true
    }
    divisor = Math.abs(divisor)
    dividendo = Math.abs(dividendo)
    let resultado
    if (divisor === dividendo) {
        resultado = 1
    } else if (divisor < dividendo) {
        let aux = 1
        let preliminar = 0
        while (aux <= dividendo && preliminar < dividendo) {
            preliminar = multiplicacion(aux, divisor)
            resultado = aux
            aux++
        }
        if (preliminar > dividendo) {
            resultado = resultado - 1
        }
    }
    console.log('negativo',resultado);
    
    if(esNegativo === true){
        resultado = "-"+resultado 
        return resultado
    }else{
        return resultado
    }
}
console.log(division(-8, 43))
//10