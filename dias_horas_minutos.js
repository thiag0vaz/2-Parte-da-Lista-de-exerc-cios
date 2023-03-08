//30°) Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

import { question } from "readline-sync";

//Entrada 
const minutos = Number(question('valor em minutos: '))

//Processamento
const dias = Math.floor(minutos / 1440)
const horas = Math.floor((minutos % 1440) / 60)
const minutos_restante = minutos % 60

//Saída 
console.log(minutos, 'minutos podem ser representados por', dias, 'dias,', horas, 'horas e', minutos_restante, 'minutos')