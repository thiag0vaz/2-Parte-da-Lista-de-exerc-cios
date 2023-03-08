/*45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
critério da distribuição ótima.*/

import { question } from "readline-sync"

//Entrada 
const saque = Number(question('valor do saque: '))

//Processamento 
const notas50 = Math.floor(saque / 50)
const notas10 = Math.floor((saque % 50) / 10)
const notas5 = Math.floor((saque % 10) / 5)
const nota1 = saque % 5

//Saída 
console.log('Notas de 50:', notas50)
console.log('Notas de 10:', notas10)
console.log('Notas de 5:', notas5)
console.log('Notas de 1:', nota1)