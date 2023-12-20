import { configureStore } from "@reduxjs/toolkit";
import userInformation from "../features/userInformation/userInformation.slice";

const store = configureStore({
  reducer: {
    [userInformation.name]: userInformation.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
