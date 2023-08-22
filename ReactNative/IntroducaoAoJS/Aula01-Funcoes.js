let valor1 = 1;
let valor2 = 2;

console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)
console.log(valor1 ** valor2)
console.log(valor1 % valor2)
console.table({numero: valor1})

function Soma(...args){
    return console.log(args.reduce((acc, numero) => acc + numero));
}

const Subtracao = (...args) => {
    return args.reduce((acc, numero) => acc - numero);
}
function Multiplicar(...args){
    return args.reduce((acc, numero) => acc * numero);
}

const Dividir = (...args) => {
    return args.reduce((acc, numero) => acc / numero);
}
const Potencia = (valor1, valor2) => {
    return valor1 ** valor2;
}
const RaizQuadrada = (valorRecebido) => {
    return Math.sqrt(valorRecebido);
}

const Header = () => {
    return `<div>Ola Mundo</div>`

}


console.log(Soma(3, 4, 7, 9))
console.log(Subtracao(3, 4, 7, 9))
console.log(Multiplicar(3, 4, 7, 9))
console.log(Dividir(3, 4, 7, 9))
