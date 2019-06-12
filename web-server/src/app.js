const path = require('path')
const express = require ('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')
 
app.set('view engine','hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Yasir Durrani'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'about the app',
        name:'this one is by me'
        
    })
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/weather', (req, res) => {
    res.send([{
        Location:'Toronto',
    },{
        Forcast: '19 degrees',

    }])
})


app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})