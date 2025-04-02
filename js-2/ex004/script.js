var nomeCompleto = prompt("Digite seu nome completo:");

var primeiroNome = nomeCompleto.split(" ")[0];

var numeroDeLetras = primeiroNome.length;

alert("O número de letras no primeiro nome (" + primeiroNome + ") é: " + numeroDeLetras);