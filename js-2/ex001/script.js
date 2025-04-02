var valor = prompt("Digite um valor numérico:");

var numero = parseFloat(valor);

if (!isNaN(numero)) {
    var valorFormatado = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    alert("Valor formatado: " + valorFormatado);
} else {
    alert("Por favor, digite um valor numérico válido.");
}