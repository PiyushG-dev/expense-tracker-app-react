import React, { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [items, setItems] = useState([]);

  const addItems = (itemName, itemExpense) => {
    setItems([
      ...items,
      { id: items.length + 1, itemName: itemName, itemExpense: itemExpense },
    ]);
  };

  return (
    <div className="App">
      <div className="layout">
        <h2 className="heading">Expense Tracker</h2>
        <Balance items={items} />
        <ExpenseList items={items} />
      </div>
      <ExpenseForm addItems={addItems} />
    </div>
  );
};

export default App;
