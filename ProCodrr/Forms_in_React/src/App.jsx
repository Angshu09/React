// import { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import {useLocalStorage} from "../Hooks/useLocalStorage"

function App() {
  const [expense, setExpense] = useLocalStorage('expense', {
    title: "",
    category: "",
    amount: "",
    email: "",
  });
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [editingRowId, setEditingRowId] = useLocalStorage('editingRowId', "");

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        <ExpenseTable
          expenses={expenses}
          setExpenses={setExpenses}
          setExpense={setExpense}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </main>
  );
}

export default App;
