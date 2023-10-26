// Imports
import axios from 'axios'

const AxiosConfig = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
})

AxiosConfig.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token')
    config.headers = {
      'Authorization': `Bearer ${token}`
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

AxiosConfig.interceptors.response.use((response) => {
  if(response.request.responseURL.includes('/login')) {
    localStorage.setItem('token', response.data.access_token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
  }
  return response
});

export default AxiosConfig
