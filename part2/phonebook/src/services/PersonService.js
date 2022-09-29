import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = async () => {
  const request = axios.get(baseUrl)
  
  const response = await request
  return response.data
}

const createPerson = async newObject => {
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

const removePerson = async id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

const updatePerson = async (person, newNumber) => {
  const updated = {...person, number: newNumber}
  const request = axios.put(`${baseUrl}/${person.id}`, updated)
  const response = await request
  return response.data
}

const PersonService = { getAll, createPerson, removePerson, updatePerson }
export default PersonService