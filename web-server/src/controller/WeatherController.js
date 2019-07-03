const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')
module.exports = {
    getWeather: (req, res) => {
        if(!req.query.address){
            return res.send({
            error:'Address must be provided',
        })
        }
    
        geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
            if(error){
                return res.send({error :error})
            }
            forcast(latitude, longitude, (error, forecastData) => {
                if(error){
                    return res.send({error})
                }
    
                res.send({
                    forcast: forecastData,
                    location,
                    address: req.query.address,
                })
            })
        })
    
        
       
    
    }
}