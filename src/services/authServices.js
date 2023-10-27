import AxiosConfig from '@/config/AxiosConfig'

export const registerUser = async (payload) => {
  try {
    const { data, status } = await AxiosConfig.post(`/users`, payload)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}

export const loginUser = async (payload) => {
  try {
    const { data, status } = await AxiosConfig.post(`/login`, payload)
    return { data, status }
  } catch (e) {
    throw new Error(e)
  }
}
