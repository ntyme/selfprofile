import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
})

export const Upload = payload => api.post('/api/upload', payload, {headers: {Accept: 'application/json', 'Content-Type': 'multipart/form-data'}})
export const Display = () => api.get('/api')

const apis = {
    Upload,
    Display
}

export default apis