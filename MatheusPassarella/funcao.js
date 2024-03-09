function saque(valor){
    const notas = [100,50,20,10,5,2];
    const resultado = {};

    for(let nota of notas){
        if(valor >= nota){
            resultado[nota] = Math.floor(valor / nota);
            valor %= nota;
        }
    }
    return resultado;
}
const valor = 120;
const resultado = saque(valor);
console.log("Quantidade de notas:");
console.log(resultado);