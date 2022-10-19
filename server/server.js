const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const { getHTML, getCSS } = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js'. getJS)

const port = 4000

app.listen(port, console.log(`Server running on ${port}`))