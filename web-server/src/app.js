const path = require('path')
const express = require ('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) =>{
    res.send([{
        name:'Yasir',
    },{
        name: 'Sarah',
        age:32
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
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