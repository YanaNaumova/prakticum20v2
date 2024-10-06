import { createSlice } from "@reduxjs/toolkit";

const expenseslice = createSlice({
  name: "expenses",
  initialState: { expenses: [] },
  reducers: {
    addExpenseToList: (state, action) => {
      state.expenses.push({
        id: Math.random() * 10000,
        title: action.payload.title,
        amount: action.payload.amount,
      });
    },
    deleteExpenseToList: (state, action) => {
      state.expenses = state.expenses.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addExpenseToList, deleteExpenseToList } = expenseslice.actions;
export default expenseslice.reducer;
