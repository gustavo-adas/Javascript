function calculadora() {
    const operacao = Number(prompt('Escola uma operacao:\n 1 - soma (+)\n - 2 - subtracao (-)\n - 3 - multiplicacao (*)\n - 4 - Dicisão real (/)\n - 4 - Divisão inteira (%)\n - 6 - Potenciação (**)'));
}

let n1 = Number(prompt('Insira o Primeiro Valor:'));
let n2 = Number(prompt('Insira o Segundo Valor:'));
let resultado;

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
}

function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
}

function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
}

function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
}

function divisaoInteira() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
}

function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
}

if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtracao();
} else if (operacao == 3) {
    multiplicacao();
} else if (operacao == 4) {
    divisaoReal();
} else if (operacao == 5) {
    divisaoInteira();
} else if (operacao == 6) {
    potenciacao();
}

calculadora();