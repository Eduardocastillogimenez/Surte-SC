import AxiosConfig from '@/config/AxiosConfig'
import axios from 'axios'

export const getAvailableStations = async (payload) => {
  try {
    const { data, status } = await AxiosConfig.post(`/stations`, payload)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}

export const getStation = async (stationId) => {
  try {
    const { data, status } = await AxiosConfig.get(`/gas_stations/${stationId}`)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}

export const createReport = async (payload) => {
  try {
    const { data, status } = await AxiosConfig.post(`/report`, payload)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}
