import React from "react";

const Balance = ({ items }) => {
  const balance = items.reduce((accumulator, item) => {
    return accumulator + item.itemExpense;
  }, 0);

  const incomeItems = items.filter((item) => item.itemExpense > 0);
  const totalIncome = incomeItems.reduce((accumulator, item) => {
    return accumulator + item.itemExpense;
  }, 0);

  const expenseItems = items.filter((item) => item.itemExpense < 0);
  const totalExpense = expenseItems.reduce((accumulator, item) => {
    return accumulator + item.itemExpense;
  }, 0);

  const totalExpenseDisplay = Math.abs(totalExpense);

  console.log(totalExpenseDisplay);

  return (
    <div className="balance">
      <div className="total_balance">
        <h2>your balance</h2>
        <p>${balance}</p>
      </div>
      <div className="balance_divison">
        <div className="income">
          <h2>income</h2>
          <p>${totalIncome}</p>
        </div>
        <div className="expense">
          <h2>expense</h2>
          <p>${totalExpenseDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
