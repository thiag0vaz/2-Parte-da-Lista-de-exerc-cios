//27°) Leia um número inteiro de segundos, calcule e escreva quantas horas,
// quantos minutos e quantos segundos ele corresponde.

import { question } from 'readline-sync'

//Entrada 
const segundos = Number(question('valor em segundos: '))

//Processamento 
const horas = Math.floor (segundos / 3600)
const segundos2 = segundos % 3600
const minutos = Math.floor (segundos2 / 60)
const final = segundos2 % 60
//Saída 
console.log(segundos, ' Segundos é equivalene a', horas, 'horas', minutos, 'minutos e', final, 'segundos')