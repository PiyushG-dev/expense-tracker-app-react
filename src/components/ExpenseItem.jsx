import React from "react";

const ExpenseItem = ({ itemName, itemExpense }) => {
  return (
    <div className="expense_item">
      <div className="item">{itemName}</div>
      <div className="amount">${itemExpense}</div>
    </div>
  );
};

export default ExpenseItem;
