import Country from './Country'
import Result from './Result'

const ResultView = ({ countries, showClicked }) => {
    if (countries.length === 1) {
        return <Country country={countries[0]}/>
    }
    if (countries.length > 10)
        return <p>Too many matches, specify another filter</p>
    return countries.map(country =>
        <>
            <br/>
            <Result name={country.name.common} key={country.ccn3} showClicked={showClicked}></Result>
        </>)
}

export default ResultView
