//28°) Leia um número inteiro de horas, calcule e escreva quantas semanas,
//quantos dias e quantas horas ele corresponde.

import { question } from 'readline-sync'

//Entrada 
const horas = Number(question('valor wm horas: '))

//Processamento 
const semanas = Math.floor(horas / 168)
const dias = Math.floor((semanas % 168) / 24)
const horas_restantes = horas % 24

//Saída 
console.log(horas, 'representa', semanas, 'semanas,', dias, 'dias e', horas_restantes , 'horas')