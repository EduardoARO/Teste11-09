const botaoCores = document.getElementById("botaoCores")
const cores = ['yellow', ' red', 'green', 'brown']

function editarEstilo() {

    const i = Math.floor(Math.random() * 4);
    botaoCores.style.background = cores[i];
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); 

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function verificarCPF() {
    const cpfInput = document.getElementById("cpf").value;
    const resultado = document.getElementById("resultado");

    if (validarCPF(cpfInput)) {
        resultado.textContent = "CPF válido!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "CPF inválido.";
        resultado.style.color = "red";
    }
}