const Searchbar = ({ choice, onSearch}) =>
    <>
        find countries<input value={choice} onChange={onSearch}/>
    </>

export default Searchbar