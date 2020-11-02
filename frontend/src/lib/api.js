import axios from 'axios'

// Drivers

export const getAllDrivers = () => {
  return axios.get('/api/drivers')
}

export const getSingleDriver = driverId => {
  return axios.get(`/api/drivers/${driverId}`)
}

export const createDriver = formData => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.post('/api/drivers', formData, headers )
}

export const updateDriver = (id, formData) => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.put(`/api/drivers/${id}`, formData, headers)
}

export const deleteDriver = driverId => {
  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.delete(`/api/drivers/${driverId}`, headers)
}

// AUTH

// this is the register user api method which sends the formData
export const registerUser = formData => {
  return axios.post('/api/register', formData)
}

export const loginUser = formData => {
  return axios.post('/api/login', formData)
}


