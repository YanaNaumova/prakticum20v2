import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expenseSlice";

export default configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
