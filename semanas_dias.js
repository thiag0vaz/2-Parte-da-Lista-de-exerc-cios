//26°) Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import { question } from 'readline-sync'

//Entrada 
const dias = Number(question('valor de dias: '))

//Processamento 
const semanas = Math.floor(dias / 7)
const resultado = dias % 7

//Saída 
console.log(dias, 'dias equivalem a', semanas, 'semnas e', resultado, 'dias')