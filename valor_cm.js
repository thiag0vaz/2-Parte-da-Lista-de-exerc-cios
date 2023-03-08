//24°) Leia um valor em m, calcule e escreva o equivalente em cm.

import { question } from 'readline-sync'

//Entrada 
const metros = Number(question('valor em m: '))
const fixa = 100

//Processamento 
const cm = metros * fixa 

//Saída 
console.log(metros, 'metros é igual a', cm, 'centímetros')