import { useState } from "react";
import { addExpenseToList } from "../../redux/slices/expenseSlice";
import { useDispatch } from "react-redux";
import { Button, notification } from "antd";
import ExspenseList from "../ExpenseList";

function ExpenseForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (pauseOnHover) => () => {
    api.open({
      message: "New Expense!!!",
      description: `Expense: ${title}, $${amount}.00`,
      showProgress: true,
      pauseOnHover,
    });
  };

  function handelClick(e) {
    e.preventDefault();
    dispatch(
      addExpenseToList({
        title,
        amount,
      })
    );
    setTitle("");
    setAmount("");
  }

  return (
    <div>
      {contextHolder}
      <form onSubmit={handelClick}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <Button
          type="primary"
          htmlType="submit"
          onClick={openNotification(true)}
        >
          add expense
        </Button>
      </form>
      <ExspenseList />
    </div>
  );
}

export default ExpenseForm;
