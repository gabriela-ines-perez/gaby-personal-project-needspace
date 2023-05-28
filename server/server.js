const { join } = require('node:path')
const express = require('express')
const hbs = require('express-handlebars')

const gabyworldRoutes = require('./routes/gabyworld')

const server = express()

// Middleware

const publicFolder = join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: true }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', gabyworldRoutes)

module.exports = server
