//34°) Leia 3 números, calcule e escreva a média dos números.

import { question } from 'readline-sync'

//Entrada 
const num1 = Number(question('Número 1: '))
const num2 = Number(question('Número 2: '))
const num3 = Number(question('Número 3: '))

//Processamento 
const media = (num1 + num2 + num3) / 3 

//Saída 
console.log('A média dos números', num1, ',', num2, 'e', num3, 'é', media)