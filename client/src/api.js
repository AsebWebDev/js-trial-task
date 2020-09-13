import axios from 'axios'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api',
  })
  
const errHandler = err => {
  if (err.response && err.response.data) {
      console.error("API response", err.response.data)
      throw err.response.data.message
  } else throw err
}

export default {
    service,
  
    async fetchAllData(querySize, sorting) {
        const basicUserData = await  this.fetchBasicData(querySize, sorting)
        console.log("fetchAllData -> basicUserData", basicUserData)
        return []
    }, 

    fetchBasicData(querySize, sorting) {
        return service
            .get('/search?length=' + querySize + '&sorting=' + sorting)
            .then(res => res.data)
            .catch(errHandler)
    },

}