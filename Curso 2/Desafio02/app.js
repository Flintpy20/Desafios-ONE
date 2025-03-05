//Desafio 01
function exibirSaudacao() {
    console.log('Olá, mundo!');
}

//Desafio 02
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}

function capturarNome() {
    let nome = document.querySelector('#nome').value;
    if (nome === '') {
        mostrarAviso();
    } else {
        exibirNome(nome);
        document.querySelector('#nome').value = '';
        document.querySelector('#nome').focus();
    }
    
}

function mostrarAviso() {
    let aviso = document.querySelector('#aviso');
    aviso.style.display = 'block'; // Mostra o aviso

    // Oculta o aviso após 3 segundos
    setTimeout(function() {
        aviso.style.display = 'none';
    }, 3000);
}
// Desafio 03
function CalcularDobro(numero) {
    return numero * 2;
}

let numeroDobrado = CalcularDobro(5);
console.log(numeroDobrado);

//Desafio 04
function mediaValores(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let media = mediaValores(4, 7, 10);
console.log(media);

//Desafio 05
function encontrarMaior(valor1, valor2) {
    return valor1 > valor2 ? valor1 : valor2;
}

let maiorNumero = encontrarMaior(7, 2);
console.log(maiorNumero);

//Desafio 06
function quadradoNumero(numero) {
    return numero * numero;
}

let resultado = quadradoNumero(5);
console.log(resultado);