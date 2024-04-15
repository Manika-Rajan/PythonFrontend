// MultiSelectDropdown.js
import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <h2>Multi-Select Dropdown</h2>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
      />
      <div>
        Selected Options: {selectedOptions.map((option) => option.label).join(', ')}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
