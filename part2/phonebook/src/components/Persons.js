import Person from './Person'

const Persons = ({ persons, onDelete }) => {
    return (
        <div>
            {persons.map((person) => {
                return person !== undefined
                    ? <Person key={person.id} id={person.id} name={person.name} number={person.number} onDelete={onDelete}></Person>
                    : <></>
            })}
        </div>)
}

export default Persons