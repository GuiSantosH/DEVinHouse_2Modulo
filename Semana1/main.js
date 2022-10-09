const express = require('express')
const app = express()
const { v4: uuidv4} = require('uuid');

let pizzas = []
let solicitacoes = []

app.use(express.json())

app.get('/pizzas', (request, response) => {
    const nameQuery = request.query.name || ""
    const pizzasFiltradas = pizzas.filter(pizza => pizza.nome.toLowerCase().includes(nameQuery.toLowerCase()))

    response.json(pizzasFiltradas)
})

app.post('/pizzas', (request, response) => {

    const {nome, descricao, url, preco, ingredientes} = request.body

    const pizzaExiste = pizzas.find(pizza => pizza.nome === nome)

    if(pizzaExiste){
        return response.status(409).json({error: 'Pizza já cadastrada no servidor'})
    }

    console.log(request.body)
    const pizza = {
        id: uuidv4(),
        nome,
        descricao,
        url,
        preco,
        ingredientes
    }

    pizzas.push(pizza)

    response.status(201).json(pizza)

})

app.get('/solicitacoes', (request, response) => {
    response.json(solicitacoes)
})

app.get('/solicitacoes/:id', (request, response) => {
    const {id} = request.params
    
    const solicitacao = solicitacoes.find(solicitacao => solicitacao.id === id)

    return response.json(solicitacao)
})

app.post('/solicitacoes', (request, response) => {
    const {nome_cliente, 
        documento_cliente,
        endereco_cliente,
        contato_cliente,
        pagamento_cliente,
        obs_cliente,
        pedido_cliente,} = request.body

    const solicitacao = {
        id: uuidv4(),
        nome_cliente, 
        documento_cliente,
        endereco_cliente,
        contato_cliente,
        pagamento_cliente,
        obs_cliente,
        pedido_cliente,
        status: "Em produção"
    }

    solicitacoes.push(solicitacao)

    response.status(201).json(solicitacao)
})

app.listen(3333, () => {
    console.log('Servidor online')
})