const express = require('express')
const app = express()
const mongoose = require('mongoose')
const pictureRoutes = require('./api/routes/picture')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = { 1: 'home', 2: 'images-selected', 3: 'drawings' }

const routesValues = Object.values(routes)
console.log(routesValues)

app.get('/', (req, res) => {
	res.send('HOME')
})

app.get(`/:allRoutes`, (req, res) => {
	const id = req.params.allRoutes
	if (routesValues.includes(id || pictureRoutes)) {
		console.log('url correcte', id)
		res.send(`Vous êtes sur la page : ${id}`)
	} else {
		res.send('Non pas cette page...')
	}
})

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	)
	next()
})

mongoose.connect('mongodb://localhost:27017/space-db', {
	useNewUrlParser: true,
})

mongoose.connection.on('error', () => {
	console.error(`connection vers mongodb erreur : ${error.message}`)
})

mongoose.connection.once('open', () => {
	console.log('Connecté à mongodb')
})

app.use('/api/pictures', pictureRoutes)

const port = 3000

app.listen(port, () => {
	console.log(`cette app écoute le port ${port}`)
})
