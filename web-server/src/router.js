const HomeController = require('./controller/HomeController')
const WeatherController = require('./controller/WeatherController')
module.exports = {
    populateRoutes: (app)=>  {
        app.get('', HomeController.getHome)
        app.get('/about', HomeController.about)
        app.get('/help', HomeController.help)

        app.get('/weather', WeatherController.getWeather)

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

        app.get('*', (req, res) =>{  
            res.render('404',{
                title:'404',
                name: 'Yasir Durrani',
                errorMessage: 'Page not found'
            })
        })

    }
}