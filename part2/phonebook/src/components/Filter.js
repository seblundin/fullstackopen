const Filter = ({ handleFilterChange, filter }) =>
  <div>
        filter shown with
    <input value={filter}
      onChange={handleFilterChange}
      name='filter' />
  </div>

export default Filter