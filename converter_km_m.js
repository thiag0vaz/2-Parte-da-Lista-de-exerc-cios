//25°) Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import { question } from 'readline-sync'

//Entrada 
const metros = Number(question('valor em metro: '))

//Processamento 
const km = Math.floor(metros / 1000)
const resultado = metros % 1000

//Saída 
console.log(metros, 'equivalem a', km, 'quilometros e', resultado, 'metros')