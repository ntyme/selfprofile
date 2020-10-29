import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
})

export const Upload = payload => api.post('/upload', payload)
export const Display = payload => api.post('/display', payload)

const apis = {
    Upload,
    Display
}

export default apis