import React from "react";

interface TodoItemsProps {
  id: number;
  title: string;
  body: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

const TodoItems: React.FC<TodoItemsProps> = ({ id, title, body, onDelete, onUpdate }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <button onClick={() => onUpdate(id)}>Update</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItems;
