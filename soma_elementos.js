//35°) Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
//número = 9534 ; soma = 9+5+3+4 = 21.

import { question } from 'readline-sync'

//Entrada 

const numero = Number(question('valor do número: '))

//Processamento 
const unidade_milhar = Math.floor(numero / 1000)
const unidade_m_resto = numero % 1000
const centena = Math.floor(unidade_m_resto / 100) 
const resto = unidadem_resto % 100 
const dezena = Math.floor(resto / 10) 
const unidade = resto % 10
const soma = unidade_milhar + centena + dezena + unidade

//Saída 
console.log('A soma dos algarismo do número', numero, 'é igual a', soma)