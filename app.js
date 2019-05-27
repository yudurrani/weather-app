 const geocode = require('./utils/geocode')
 const forcast = require('./utils/forcast')
 

 const address = process.argv[2]
 console.log(process.argv)

 if(!address){
     console.log('Please provide an address')
 } else {

    
geocode( address, (error, data) => {
    if(error){
        return console.log(error)
    }

    forcast(data.latitude, data.longitude, (error, forcastData) => {
        if (error){
            return console.log(error)
        }

        console.log(data.location)
        console.log(forcastData)
    })

})
 }

