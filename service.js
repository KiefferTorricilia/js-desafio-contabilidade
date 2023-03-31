
const validarEntradaDeDados = (lancamento) => {

// console.log(lancamento)
// console.log( typeof lancamento.valor)

let message;

const verificaValidade = TestaCPF(lancamento.cpf) ? null : message = "O cpf informado não é válido.";

const verificaNumero = isNumeric(lancamento.cpf) ? null : message = "O cpf informado deve conter apenas números.";

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
  console.log(lancamentos);
  let teste = [...lancamentos]
  console.log(teste)

  const x = lancamentos
  const y = []
  let inserir = true;
 for (let i = 0; i< x.length; i++) {
   for (let j = 0; j< y.length;j++) {
     if (y[j].cpf === x[i].cpf) {
       inserir = false;
       y[j].valor += x[i].valor;
     }
   }
   if (inserir) {
     y.push(x[i])
   }
 }
 console.log(y)

   return y
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






