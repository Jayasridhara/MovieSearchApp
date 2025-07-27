const FilterDropdown = ({ selectedType, onChange  }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={selectedType}
      onChange={handleChange}
      className="p-2 border rounded "
    >
      <option value="">All Types</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default FilterDropdown;
