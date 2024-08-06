import axios from 'axios'

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

const publicInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const privateInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const otherInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  transformRequest: (data, error) => {
    return data
  },
})







