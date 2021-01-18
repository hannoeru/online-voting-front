import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_ENDPOINT,
  timeout: 1000,
  withCredentials: true,
})

export default axios
