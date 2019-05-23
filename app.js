 const request = require('request')
 const geocode = require('./utils/geocode')
 const forcast = require('./utils/forcast')


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





geocode( 'Toronto', (error, data) => {

    console.log('Error' , error)
    console.log('Data' , data)

})