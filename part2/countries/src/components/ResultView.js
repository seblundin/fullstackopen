import Country from './Country'
import Result from './Result'

const ResultView = ({ countries, showClicked }) => {
    if (countries.length === 1) {
        console.log("trying to return country")
        return <Country country={countries[0]}/>
    }
    if (countries.length > 10)
        return <p>Too many matches, specify another filter</p>
    return countries.map(country =>
        <>
            <Result name={country.name} key={country.numericCode} showClicked={showClicked}></Result>
            <br></br>
        </>)
}

export default ResultView
