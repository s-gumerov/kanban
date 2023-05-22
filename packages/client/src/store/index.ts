import { configureStore } from "@reduxjs/toolkit";
import { getUserReducer, initialStateOfUser } from "./user/userSlice";


const initialState = {
    user: initialStateOfUser,
  }

const store = configureStore({
    reducer: {
      user: getUserReducer(initialState),
    },
  })

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch
  export default store
  