//37°) Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import { question } from 'readline-sync'

//Entrada 
const dias = Number(question('Número de dias: '))

//Processamneto 
const anos = Math.floor(dias / 365)
const meses = Math.floor((dias % 365) / 30)
const dias_restantes = dias % 30

//Saída 
console.log(dias, 'representam', anos, 'anos,', meses, 'meses e', dias_restantes, 'dias')