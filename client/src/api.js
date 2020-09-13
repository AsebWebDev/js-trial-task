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
  
    fetchAllData() {
        
    }, 

}