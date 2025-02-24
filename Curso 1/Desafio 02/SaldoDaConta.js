alert('Desafio 04');

let consultaSaldo;
let saldoConta = 0;
let deposito = parseFloat(prompt('Digite o seu depósito:'));
let totalSaldo = saldoConta + deposito;

consultaSaldo = prompt('Deseja consultar o seu saldo?:');
if (consultaSaldo == 'Sim' ) {
	if (totalSaldo > 0) {
		alert(`O saldo da sua conta é de: R$${totalSaldo}`);
	} else {
		alert('Você não possui saldo');
	}
	
}