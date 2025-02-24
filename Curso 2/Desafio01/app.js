let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirNoConsole() {
	console.log('O botão foi clicado.');
}

function exibirAlerta() {
	alert('Eu amo JS');
}

function exibirPrompt() {
	let nomeCidade = prompt('Digite um nome de uma cidade do Brasil:');
	alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

function somarNumeros() {
	let num1 = parseInt(prompt('Digite um número:'));
	let num2 = parseInt(prompt('Digite outro número:'));
	let soma = num1 + num2;

	alert(`A soma entre ${num1} e ${num2} é ${soma}`);
}