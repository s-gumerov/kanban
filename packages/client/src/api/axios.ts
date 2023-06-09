import axios from 'axios'
import { BASE_URL_API } from '../../../shared/API'

export const axiosInstance = axios.create({
    baseURL: BASE_URL_API,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  })