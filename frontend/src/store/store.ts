import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const store = () => {
  return configureStore({
    reducer: {
      userSlice,
    },
  });
};

export type StoreType = ReturnType<typeof store>;
export type AppDispatch = StoreType["dispatch"];
export type RootState = ReturnType<StoreType["getState"]>;
