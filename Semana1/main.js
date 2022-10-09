const express = require('express')
const app = express()
const { v4: uuidv4} = require('uuid');

let pizzas = []

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

app.listen(3333, () => {
    console.log('Servidor online')
})