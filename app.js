 const request = require('request')
 const geocode = require('./utils/geocode')
 const forcast = require('./utils/forcast')




forcast(37.8267,-122.4233, (error,data) => {
    console.log('Error', error)
    console.log('Data', data)
})


// geocode( 'Toronto', (error, data) => {

//     console.log('Error' , error)
//     console.log('Data' , data)

// })