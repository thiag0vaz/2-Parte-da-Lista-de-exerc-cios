/*40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).*/

import { question } from "readline-sync"

//Entrada 
const anos = Number(question('anos fumando: '))
const cigarro = Number(question('quantidade de cigarros fumados diariamente: '))
const preco = Number(question('preço da carteira: '))

//Processamento 
const cigarros_anual = cigarro * 365
const anos_fumando = cigarros_anual * anos 
const preco_cigarro = preco / 20
const preco_final = anos_fumando * preco_cigarro

//Saída 
console.log('Se um individuo fumar por', anos, 'anos ele gastará em média', preco_final, 'reais')