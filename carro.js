/*41°) O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor.*/

import { question } from 'readline-sync'

//Entrada 
const custo_fábrica = Number(question('valor do custo fábrica: '))

//Processamneto 
const per_distribuidor = custo_fábrica * 0.28
const imposto = custo_fábrica * 0.45
const custo_consumidor = custo_fábrica + per_distribuidor + imposto

//Saída 
console.log('Um carro com custo de fábrica de', custo_fábrica, 'reais, custará', custo_consumidor, 'reais ao consumidor')