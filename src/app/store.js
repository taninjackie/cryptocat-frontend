import { configureStore } from "@reduxjs/toolkit";
import registerForm from "./reducers/registerFormSlice";
export default configureStore({
  reducer: {
    registerForm,
  },
});
