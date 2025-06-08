import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Alex",
  surname: "Beridze",
  age: 25,
  admin: false,
  cash: 3200,
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { changeEmail } = userSlice.actions;

export default userSlice.reducer;