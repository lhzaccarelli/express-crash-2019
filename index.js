const Express = require('express')

const app = new Express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('<h2>Hello!</h2>')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))