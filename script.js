
let saldo = 1000;

const operacao = document.getElementById('operacao');
const campoValor = document.getElementById('valor');
const resultado = document.getElementById('resultado');
const botaoRealizar = document.getElementById('realizar');
const container = document.querySelector('.container');

botaoRealizar.addEventListener('click', function () {
    const operacaoSelecionada = operacao.value;
    const valor = parseFloat(campoValor.value);

      resultado.textContent = '';
    resultado.classList.remove('mostrar');

       if (operacaoSelecionada !== 'saldo' && (isNaN(valor) || valor <= 0)) {
        resultado.textContent = 'Por favor, insira um valor válido.';
        resultado.classList.add('mostrar');         return;
    }

    switch (operacaoSelecionada) {
        case 'saldo':
            resultado.textContent = `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
            break;

        case 'saque':
            if (valor > saldo) {
                resultado.textContent = 'Saldo insuficiente para realizar o saque.';
            } else {
                saldo -= valor;
                resultado.textContent = `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`;
            }
            break;

        case 'deposito':
            saldo += valor;
            resultado.textContent = `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`;
            break;

        default:
            resultado.textContent = 'Operação inválida.';
            break;
    }

    setTimeout(() => resultado.classList.add('mostrar'), 100);

    campoValor.value = '';
});


window.addEventListener('load', function() {
    container.classList.add('mostrar-container');
});
