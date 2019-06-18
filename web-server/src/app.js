const path = require('path')
const express = require ('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath =  path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Yasir Durrani'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About',
        name:'this one is by me'
        
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText:'This is some helpful text.',
        title:'Help',
        name:'Yasir',
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
        error:'Address must be provided',
    })
    }

    console.log(req.query.address)
    res.send({
        forcast: 'it is sunny',
        location: 'Oakville',
        address: req.query.address,
    })

})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
        error:'The search item is not provided',
    })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get( '/help/*', (req, res) => {
    res.render( '404',{
        title :'404',
        name: 'Yasir Durrani',
        errorMessage: 'Help page not found'

    })
})


app.get('*', (req, res) =>{  
    res.render('404',{
        title:'404',
        name: 'Yasir Durrani',
        errorMessage: 'Page not found'
    })
})


app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})