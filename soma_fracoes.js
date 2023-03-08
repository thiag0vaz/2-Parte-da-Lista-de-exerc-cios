//38°) Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
//resultado em forma de fração.

import { question } from 'readline-sync'

//Entrada 
const num1 = Number(question('valor do numerador 1: '))
const den1 = Number(question('valor do denominador 1: '))
const num2 = Number(question('valor do nemerador 2: '))
const den2 = Number(question('valor do denominador 2: '))

//Processamento 
const den_novo = den1 * den2
const num_novo = num1 * den2
const num_novo_2 = num2 * den1
const soma = num_novo + num_novo_2
const fracao = `${soma} / ${den_novo}`

//Saída 
console.log('O resultado é:', fracao)