import { useState } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Persons from './components/Persons'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const namesToShow = persons.length > 0
    ? persons.filter(person => person.name.toLowerCase().indexOf(filter) !== -1)
    : persons

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`)

    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length
      }
      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => setFilter(event.target.value.toLowerCase())
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter}
        handleFilterChange={handleFilterChange} />
      <h3>Add a new contact</h3>
      <Personform handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber} />
      <h3>Numbers</h3>
      <Persons persons={namesToShow} />
    </div>
  )
}



export default App
