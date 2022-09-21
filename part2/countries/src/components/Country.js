import axios from 'axios'
import { useState, useEffect } from 'react'

const Country = ({ country }) => {
    const [weather, setWeather] = useState(Object)
    const key = process.env.REACT_APP_API_KEY
    const lat = country.latlng[0]
    const lon = country.latlng[1]

    const getWeather = () => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
            .then(response => setWeather(response.data))
    }

    // eslint-disable-next-line
    useEffect(getWeather, [])

    const weatherFetched = weather.main !== undefined

    return (
        <>
            <h2>{country.name.common}</h2>
            <br />
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <br />
            <b>languages:</b>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <br />
            <h1>{country.flag}</h1>
            <div>
                {weatherFetched
                    ? <>
                        <h2>Weather in {country.capital[0]}</h2>
                        <p>temperature {weather.main.temp} Celsius</p>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather icon'></img>
                        <p>wind {weather.wind.speed}</p>
                    </>
                    : <></>
                }
            </div>
        </>
    )
}

export default Country