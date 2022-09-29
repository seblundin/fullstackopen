import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'
import personService from './services/PersonService'
import Notification from './components/Notification'

const App = () => {
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setNotification(null)
    }, 2000)
  }, [notification])

  const namesToShow = filter.length > 0
    ? persons.filter(person => person.name.toLowerCase().indexOf(filter) !== -1)
    : persons

  const addPerson = (event) => {
    event.preventDefault()
    const personExists = persons.some(person => person.name === newName)

    if (personExists
      && window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
      personService
        .updatePerson(persons.filter(person => person.name === newName)[0], newNumber)
        .then(response => {
          setPersons(persons.map(person => person.id === response.id ? response : person))
          setNotification({message: `${newName} updated succesfully`, isError: false})
        })
        .catch(() => setNotification({message: `Information of ${newName} has already been removed from server`, isError: true}))

    } else if (!personExists && newName !== '') {
      const personObject = {
        name: newName,
        number: newNumber,
        id: parseInt(newName)
      }

      personService
        .createPerson(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNotification({message: `${newName} added succesfully`, isError: false})
        })
        .catch(e => setNotification({message: e.response.data.error, isError: true}))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => setFilter(event.target.value.toLowerCase())
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const onDelete = (id) => {
    const toRemove = persons.filter(person => person.id === id)[0]
    if (toRemove !== undefined && window.confirm(`Delete ${toRemove.name}?`)) {
      personService
        .removePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setNotification({message: `${toRemove.name} deleted succesfully`, isError: false})
        })
        .catch(e => console.log(e))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {notification !== null ? <Notification notification={notification} /> : null}
      <Filter setFilter={setFilter}
        handleFilterChange={handleFilterChange} />
      <h3>Add a new contact</h3>
      <Personform handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber} />
      <h3>Numbers</h3>
      {namesToShow !== undefined && namesToShow.length > 0
        ? <Persons persons={namesToShow} onDelete={onDelete} />
        : <></>}
    </div>
  )
}

export default App