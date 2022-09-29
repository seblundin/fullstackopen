const Person = ({ id, name, number, onDelete }) =>
  <>
    {name} {number} <button onClick={() => onDelete(id)}>delete</button><br></br>
  </>

export default Person