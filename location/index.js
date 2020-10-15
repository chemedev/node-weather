const axios = require('axios')

module.exports.getLocation = async address => {
  const encodedUrl = encodeURI(address)

  const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/users/${encodedUrl}`
  })

  try {
    const resp = await instance.get()
    if (resp.data.length === 0) throw new Error('Not found.')
    const data = resp.data
    const city = data.address.city
    const lat = data.address.geo.lat
    const lon = data.address.geo.lng
    return { city, lat, lon }
  } catch (error) {
    throw `getLocation: ${error.message}`
  }
}
