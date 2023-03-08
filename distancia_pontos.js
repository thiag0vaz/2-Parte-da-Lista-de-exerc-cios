/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.*/

import { question } from "readline-sync"

//Entrada 
const x1 = Number(question('valor de x1: '))
const x2 = Number(question('valor de x2: '))
const y1 = Number(question('valor de y1: '))
const y2 = Number(question('valor de y2: '))

//Processamento 
const quadrado1 = (x2 - x1) ** 2
const quadrado2 = (y2 - y1) ** 2
const raiz = Math.sqrt(quadrado1 + quadrado2)

//Saída 
console.log('A distância entre os pontos é', raiz.toFixed(2))