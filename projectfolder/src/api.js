import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
})

export const Upload = payload => api.post('/upload', payload, {headers: {Accept: 'application/json', 'Content-Type': 'multipart/form-data'}})
export const Display = () => api.get('/display')

const apis = {
    Upload,
    Display
}

export default apis