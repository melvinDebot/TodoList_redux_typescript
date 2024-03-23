import React from "react";

interface TodoFiltersProps {
  filteredList: (website: string) => void;
  value: string;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({ filteredList, value }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search"
        onChange={(e) => filteredList(e.target.value)}
      />
    </div>
  );
};

export default TodoFilters;
