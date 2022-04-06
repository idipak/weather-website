const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=c4a158af6853b9f761a437d5e9be527a&query=37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {

//   if(error){
//     console.log("Unable to connect to Weather Service")
//   }
//   else if(response.body.error){
//     console.log("Unable to find location")
//   }
//   else{
//     console.log(`${response.body.current.weather_descriptions}. Is is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
//   }
// })

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c4a158af6853b9f761a437d5e9be527a&query=${latitude},${longitude}`

  request({url, json: true},(error, {body}) => {
    if (error){
      callback('Unable to connect to Weather Services', undefined)
      }
    else if(body.error){
      callback('Unable to find location', undefined)
    }
    else{
      callback(undefined,`${body.current.weather_descriptions}. Is is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
    }
    }
  )
}

module.exports = forecast