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
