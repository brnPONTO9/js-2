var valor1 = parseFloat(prompt("Digite o primeiro valor monetário (R$):"));
var valor2 = parseFloat(prompt("Digite o segundo valor monetário (R$):"));
var valor3 = parseFloat(prompt("Digite o terceiro valor monetário (R$):"));

var media = (valor1 + valor2 + valor3) / 3;

var mediaFormatada = media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

alert("A média dos valores é: " + mediaFormatada);