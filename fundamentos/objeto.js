const prod1 = {}
prod1.nome = 'OBJETO'
prod1.description = 'Objeto é uma coleção de chave valor'
prod1.preco = 777.00

prod1['desconto geral'] = 0.40 // Evitar essa notação com espaço

console.log(prod1)
console.log(prod1.nome)

const prod2 = {
    nome: 'Camiseta Polo',
    preco: 80.00,
    obj: {
        teste: 1,
        obj: {
            teste: 2
        }
    }
}

console.log(prod2)