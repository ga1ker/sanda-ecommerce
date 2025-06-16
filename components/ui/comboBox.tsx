import React, { useState } from 'react';

interface ComboBoxProps {
  label: string;
  options?: string[];
  onSelect: (value: string) => void;
  selectedValue: string;
}

export const ComboBox = ({ label, options = [], onSelect, selectedValue }: ComboBoxProps) => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(false);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={search || selectedValue}
        onChange={(e) => {
          setSearch(e.target.value);
          setExpanded(true);
          
        }}
        onFocus={() => setExpanded(true)}
        onBlur={() => setTimeout(() => setExpanded(false), 200)} // tiempo para permitir clic en opciones
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        placeholder={`Buscar ${label.toLowerCase()}...`}
      />

      {expanded && filteredOptions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-200 mt-1 w-full rounded shadow max-h-60 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onMouseDown={() => {
                onSelect(option);
                setSearch(option);
                setExpanded(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
