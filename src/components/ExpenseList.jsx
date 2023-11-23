import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ items }) => {
  return (
    <div className="expense_list">
      <h2>History</h2>
      <hr />
      <div className="list">
        {items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              itemName={item.itemName}
              itemExpense={item.itemExpense}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseList;
