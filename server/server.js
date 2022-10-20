const express = require('express')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const { getHTML, getCSS, getJS} = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'db8f7e8361a04cf190d6446409592492',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
rollbar.log('test')

const port = process.env.PORT || 4000

app.listen(port, console.log(`Server running on ${port}`))