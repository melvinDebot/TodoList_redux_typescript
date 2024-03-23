import React from "react";

interface TodoItemsProps {
  id: number;
  title: string;
  body: string;
  onDelete: (id: number) => void;
}

const TodoItems: React.FC<TodoItemsProps> = ({ id, title, body, onDelete }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItems;
