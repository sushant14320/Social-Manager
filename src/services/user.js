import { baseAPI } from '../config'
import axios from 'axios'


export const getUserInfo = (token) => {
  return axios.get(`${baseAPI}/me?access_token=${token}`)
}

export const getPages = (token) => {
  return axios.get(`${baseAPI}/me/accounts?access_token=${token}`)
}