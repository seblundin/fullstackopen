import axios from 'axios'
import { useState, useEffect } from 'react'
import ResultView from './components/ResultView'
import Searchbar from './components/Searchbar'

function App() {
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => setCountries(response.data))
  }, [])

  const [choice, setChoice] = useState([])
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearch = (event) => {
    setSearch(event.target.value)
    setChoice(countries.filter(country => country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))
  }

  const selectCountry = (name) => {
    setChoice(choice.filter(country => country.name.toLowerCase() === name.toLowerCase()))
  }

  return (
    <div>
      <Searchbar search={search} onSearch={handleSearch} />
      <ResultView countries={choice} showClicked={selectCountry}/>
    </div>
  )
}

export default App;
