import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTodo = createAsyncThunk("fetchtodo", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  response = await response.json();
  return response;
});
const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    isLoading: true,
    data: [], // Initialize as an empty array to avoid null issues
    isError: false,
  },
  reducers: {
    add: (state, action) => {
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
    builder.addCase(fetchTodo.rejected, (state,action) => {
      console.log("Error",action.payload)
      state.isError = true;
    });
  },
});
export const { add } = todoSlice.actions;
export default todoSlice.reducer;
