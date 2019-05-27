// const geocode = (address, callback) => {

//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWFzaXJ0aGVkdXJyYW5pIiwiYSI6ImNqdnhoMXA5azA1MmY0YW1qaDRjZjluMnIifQ.JC-I3GJHfksjPee6Q_19IA&limit=1'

//     request({url: url, json: true} , (error, response) => {
       
//         if(error) {
//             callback('Unable to connect to location services' , undefined)
//         }else if(response.body.features.length === 0){
//             callback('Unable to connect to location. Try aother search' , undefined)
//         }else{
//             callback(undefined, {
//                 latitude : response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location : response.body.features[0].place_name

//             })
//         }
//         }
//         )}


        // object property shorthand


        const name ="yasir"
        const userAge = 32

        const user = {
            name,
            age : userAge,
            location : 'Toronto'
        }

        console.log(user)


        // object destructing

        const product = {
            label :' red notebook',
            price : 3,
            stock: 201,
            salePrice : undefined,
            rating :4.2
        }

        // const label = product.label
        // const stock = product.stock

        // const {label:productLabel, stock, rating = 5} = product
        // console.log(productLabel)
        // console.log(stock)
        // console.log(rating) 

        const transaction = (type, {label}) => {
            
        }

        transaction('order', product)