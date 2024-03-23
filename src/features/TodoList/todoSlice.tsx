import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface Task {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const initialState: Task[] = [];

// Création d'un async thunk pour récupérer les tâches
export const fetchTasks = createAsyncThunk("todo/fetchTasks", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Remplacez par l'URL réelle de votre API
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const tasks = await response.json();
  return tasks as Task[];
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },

    onDelete: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTasks.fulfilled,
      (state, action: PayloadAction<Task[]>) => {
        return action.payload;
      },
    );
    // Gérer également les états pending et rejected si nécessaire
  },
});

// Action creators are generated for each case reducer function
export const { addNewTask, onDelete } = todoSlice.actions;

export default todoSlice.reducer;
