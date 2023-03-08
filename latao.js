/*44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/

import { question } from "readline-sync"

//Entrada 
const latao = Number(question('valor em kg de latão: '))

//Processamento 
const cobre = latao * 0.70
const zinco = latao * 0.30

//Saída 
console.log('Para fazer', latao, 'quilogramas de latão, precisa-se de', cobre.toFixed(1), 'quilogramas de cobre e',
zinco.toFixed(1), 'quilogramas de zinco')