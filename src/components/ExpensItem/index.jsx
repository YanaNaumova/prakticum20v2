import { Button } from "antd";

function ExpenseItem({ title, amount, deleteFunct }) {
  return (
    <li>
      {title}: ${amount}.00
      <Button type="primary" htmlType="submit" onClick={deleteFunct}>
        Delete
      </Button>
    </li>
  );
}

export default ExpenseItem;
