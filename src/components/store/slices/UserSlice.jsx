import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "Talha Nawaz",
  initialState: [],
  reducers: {
    addUser(state, action) {
    },
    removeUser(state, action) {
    },
    clearAllUsers(state, action) {
    }
  },
});
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
export default userSlice.reducer;
