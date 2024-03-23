import React, { useState, useEffect } from "react";
import TodoFilters from "./components/TodoFilters";
import TodoItems from "./components/TodoItems";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { onDelete, fetchTasks, addNewTask } from "./todoSlice";

interface NewTask {
  title: string;
  body: string;

}

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector((state) => state.todo);
  const count = useAppSelector((state) => state.counter.value);
  const [newTask, setNewTask] = useState<NewTask>({
    title: "",
    body: "",
  });
  const [search, setSearch] = useState<string>("");

  const filteredList = todoList.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={newTask.title}
        onChange={(e) =>
          setNewTask({ ...newTask, title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="body"
        value={newTask.body}
        onChange={(e) =>
          setNewTask({ ...newTask, body: e.target.value })
        }
      />

      <button
        onClick={() => {
          dispatch(
            addNewTask({
              id: Math.random(),
              userId: Math.random(),
              title: newTask.title,
              body: newTask.body,
            }),
          );
          setNewTask({ title: "", body: "" });
        }}
      >
        Add
      </button>

      <h1>Todo List {count}</h1>
      <TodoFilters filteredList={(value) => setSearch(value)} value={search} />
      {filteredList.map((item) => (
        <TodoItems
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
          onDelete={(id) => dispatch(onDelete(id))}
        />
      ))}
    </div>
  );
};

export default TodoList;
