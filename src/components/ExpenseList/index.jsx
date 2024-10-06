import ExpenseItem from "../ExpensItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpenseToList } from "../../redux/slices/expenseSlice";

function ExspenseList() {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();
  return (
    <ul>
      {expenses.map((el) => (
        <ExpenseItem
          {...el}
          key={el.id}
          deleteFunct={() => dispatch(deleteExpenseToList(el.id))}
        />
      ))}
    </ul>
  );
}

export default ExspenseList;
