 //import {request} from "https";

 const request = require('request')


// const url = 'https://api.darksky.net/forecast/8f749f307f69ae04f74c491ce934b590/37.8267,-122.4233'

// request({url: url, json: true},(error, response) => {
//     if(error){
//         console.log('Cannot connect to the weather app')

//     }else if(response.body.error){
//         console.log('Cannot find the location of subject')

    
//     }else {

    
//    console.log( response.body.daily.data[0].summary + ' It is currently ' , response.body.currently.temperature , ' degrees out. There is a ', response.body.currently.precipProbability , ' percent chance of rain' )
//     }
    
//     })

// const geoCodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoieWFzaXJ0aGVkdXJyYW5pIiwiYSI6ImNqdnhoMXA5azA1MmY0YW1qaDRjZjluMnIifQ.JC-I3GJHfksjPee6Q_19IA&limit=1'


// request({url:geoCodeurl, json: true},(error, response) => {

//     if(error){
//         console.log('Cannot connect to the locator')
//     }else if(response.body.features.length === 0){
//         console.log('Cannot find the location')
//     }else{

//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]

//     console.log( 'Latitude = ' + latitude + ' Longitude = ' + longitude)
//     }
   
    
// })

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWFzaXJ0aGVkdXJyYW5pIiwiYSI6ImNqdnhoMXA5azA1MmY0YW1qaDRjZjluMnIifQ.JC-I3GJHfksjPee6Q_19IA&limit=1'

    request({url: url, json: true} , (error, response) => {
       
        if(error) {
            callback('Unable to connect to location services' , undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to connect to location. Try aother search' , undefined)
        }else{
            
        }

    })
}

geocode( '12what', (error, data) => {

    console.log('Error' , error)
    console.log('Data' , data)

})