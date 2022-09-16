const Country = ({ country }) => {
    return(
        <>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <br/>
            {/* <ul>
                languages:
                {country.languages.map(language => <li key={language}>{language}</li>)}
            </ul> */}

        </>
    )
}

export default Country