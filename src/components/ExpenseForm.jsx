import React from "react";
import { useState } from "react";

const ExpenseForm = ({ addItems }) => {
  const [itemName, setItemName] = useState("");
  const [itemExpense, setItemExpense] = useState("");

  const showAlert = () => {
    alert("please fill all the boxes");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemName && itemExpense !== "") {
      addItems(itemName, itemExpense);
    } else {
      showAlert();
    }
    setItemName("");
    setItemExpense("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense_form">
      <label>Add new transactions</label>
      <hr />
      <input
        type="text"
        placeholder="add item here"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="$0.00"
        value={itemExpense}
        onChange={(e) => setItemExpense(Number(e.target.value))}
      />
      <button type="submit">Add transaction</button>
    </form>
  );
};

export default ExpenseForm;
