const axios = require('axios')
const colors = require('colors')

const { getLocation } = require('./location')
const { getWeather } = require('./weather')

const argv = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'Address of city to obtain weather',
    demand: true
  }
}).argv

const getInfo = async address => {
  try {
    const { city, lat, lon } = await getLocation(address)
    const { temp } = await getWeather(lat, lon)
    console.log(`El clima en ${city} es de ${temp}`.brightGreen)
  } catch (error) {
    console.log(`No se pudo determinar el clima de ${address}`.brightRed)
    console.log(`${error}`.grey.italic)
  }
}

getInfo(argv.address)
