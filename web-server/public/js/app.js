console.log('Client side javascript file is loaded ')

fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) =>{ 
        if (data.error){
            console.log(data.error)
        }
        else {
            console.log(data.location)
            console.log(data.forcast)
        }
    })
})

const weatherform = document.querySelector('form')
const search = document.querySelector('input')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()

    const location= search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((locationw) =>{ 
        if (locationw.error){
            console.log(locationw.error)
        }
        else {
            console.log(locationw.location)
            console.log(locationw.forcast)
        }
    })
})
    
})