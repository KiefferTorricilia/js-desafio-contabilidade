const validarEntradaDeDados = (lancamento) => {

// console.log(lancamento)
// console.log( typeof lancamento.valor)

let message;

const valorCpf = document.getElementById('cpf').value;

const verificaValidade = TestaCPF(valorCpf) ? null : message = "O cpf informado não é válido.";

const verificaNumero = isNumeric(valorCpf) ? null : message = "O cpf informado deve conter apenas números.";

const verificaSuperior = lancamento.valor < 15000.00 ? null : message = "O valor informado não pode ser superior a R$: 15000,00 reais.";

const verificaInferior = lancamento.valor > -2000.00 ? null : message = "O valor informado não pode ser inferior a R$: -2000,00.";

switch(message){
	case verificaValidade:
		return verificaValidade;
	case verificaNumero:
		return verificaNumero;
	case verificaSuperior:
		return verificaSuperior;
	case verificaInferior:
		return verificaInferior;
	default:
		return null;	
};

}

const recuperarSaldosPorConta = (lancamentos) => {
   // console.log("Chegou", lancamentos)
   // console.log(lancamentos[0].valor)
   // console.log( typeof lancamentos[0].valor)

   return []
}

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
   return []
}

const recuperarMaioresSaldos = (lancamentos) => {
   return []
}

const recuperarMaioresMedias = (lancamentos) => {
    return []
}

const isNumeric = function(value) {

        return /^\d+(?:\.\d+)?$/.test(value);
};

function TestaCPF(strCPF) {
   let Soma;
   let Resto;
   Soma = 0;
 if (strCPF == "00000000000") return false;

 for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
 Resto = (Soma * 10) % 11;

   if ((Resto == 10) || (Resto == 11))  Resto = 0;
   if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

 Soma = 0;
   for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
   Resto = (Soma * 10) % 11;

   if ((Resto == 10) || (Resto == 11))  Resto = 0;
   if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
   return true;
}


// let Nome = parseFloat("1.234,78".replace(/\./g, '').replace(',', '.'))
// console.log(typeof Nome);
// console.log(Nome)





