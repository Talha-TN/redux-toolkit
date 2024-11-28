
////////////////////////////////////////////////
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTodo = createAsyncThunk("fetchtodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});
const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    isLoading: false,
    data: [], // Initialize as an empty array to avoid null issues
    isError: false,
  },
  reducers: {
    add: (state, action) => {
      // Push only if `data` exists
      state.data.push({ title: action.payload }); // Ensure new items follow the data structure
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodo.rejected, (state) => {
      state.isError = true;
    });
  },
});
export const { add } = todoSlice.actions;
export default todoSlice.reducer;
