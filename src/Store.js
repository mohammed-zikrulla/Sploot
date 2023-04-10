import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Token: "",
  Username: "",
};

const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.Token = action.payload;
    },
    updateUsername: (state, action) => {
      state.Username = action.payload;
    },
  },
});

const store = configureStore({
  reducer: mySlice.reducer,
});

export const { updateToken, updateUsername } = mySlice.actions;
export default store;
