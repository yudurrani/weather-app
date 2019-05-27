const request = require('request')
var fahrenheitToCelsius = require('fahrenheit-to-celsius');

     const forcast = (latitude, longitude, callback) => {

     const url = 'https://api.darksky.net/forecast/8f749f307f69ae04f74c491ce934b590/' + latitude + ','+ longitude

     request({url: url, json: true},(error, response) => {
            if(error){
                callback('Unable to connect to location services', undefined)
        
            }else if(response.body.error){
                callback('Unable to connect to location. Try aother search' , undefined)
        
            }else {
                callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + (fahrenheitToCelsius(response.body.currently.temperature)).toFixed(2) + '  Celsius Degrees out. There is a ' + response.body.currently.precipProbability + ' percent chance of rain')
            
                   }
            
            })
        }


module.exports = forcast