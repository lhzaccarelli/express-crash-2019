const express = require('express')
const path = require('path')

const app = new express()

const PORT = process.env.PORT || 5000

// Uma maneira de fazer, nomeando cada rota
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Outra maneira de fazer, com diretórios estáticos
// app.use(express.static(path.join(__dirname, 'public')))

const members = [
    {
        id: 1, 
        name: 'John Doe', 
        email: 'john@email.com',
        status: 'active'
    },
    {
        id: 2, 
        name: 'Bob Williams', 
        email: 'bob@email.com',
        status: 'inactive'
    },
    {
        id: 3, 
        name: 'Shannon Jackson', 
        email: 'shannon@email.com',
        status: 'active'
    },
]

// Gets all members
app.get('/api/members', (req, res) => res.json(members))
//24:00


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))