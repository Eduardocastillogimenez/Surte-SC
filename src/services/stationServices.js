import AxiosConfig from '@/config/AxiosConfig'
import axios from 'axios'

export const getAvailableStations = async (payload) => {
  try {
    const { data, status } = await AxiosConfig.get(`/gas_stations`, payload)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}

export const getAvailableStationsPut = async (payload) => {
  try {
    const { data, status } = await AxiosConfig.put(`/gas_stations`, payload)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}


export const getAvailableStationsPost = async (payload) => {
  try {
    const { data, status } = await AxiosConfig.post(`/gas_stations`, payload)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}