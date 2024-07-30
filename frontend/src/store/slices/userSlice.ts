import { createSlice } from "@reduxjs/toolkit";

interface IUserSlice {
  user: null | {
    name: string;
    email: string;
    profilePicture: string;
    tasks: number;
  };
}

const initialState: IUserSlice = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
