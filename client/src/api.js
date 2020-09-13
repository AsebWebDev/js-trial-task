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

// Parse Query-String from array of given ids (Numbers)
const parseIds = (ids) => {
    let result = 'ids='
    ids.forEach(element => result = result + element.toString() + '&ids=')
    result = result.substring(0, result.length-5); // cut off the last not needed '&ids='
    return result
}

export default {
    service,
  
    async fetchAllData(querySize, sorting) {
        // Fetch basic userdata
        const basicUserData = await  this.fetchBasicData(querySize, sorting)
            //Extract all IDs from basic User data
        const ids = basicUserData.items.map(item => item.id)
        // Fetch detailed userdata
        
        return []
    }, 

    fetchBasicData(querySize, sorting) {
        return service
            .get('/search?length=' + querySize + '&sorting=' + sorting)
            .then(res => res.data)
            .catch(errHandler)
    },

}