const axios = require('axios')

module.exports.getWeather = async (lat, lng) => {
  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=fe334b38e1faa57ef7bd88485ecf0753`
    )

    if (resp.length === 0) throw new Error('No response')
    const { temp } = resp.data.main
    return { temp }
  } catch (error) {
    throw `getWeather: ${error.message}`
  }
}
