let porcentagemDesconto = 0;
let quantidadeDeMilhas = 30000;

if (quantidadeDeMilhas > 5000) {
	porcentagemDesconto = 10;
	console.log(porcentagemDesconto);
}
if (quantidadeDeMilhas > 30000) {
	porcentagemDesconto = 20;
	console.log(porcentagemDesconto);
} else {
	porcentagemDesconto = 0;
	console.log(porcentagemDesconto);
}