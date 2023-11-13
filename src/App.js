import './App.css';
import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from "./components/NewExpense/NewExpense.js";


const DUMMY_EXPENSES = [
    {
      id: 'e1',
      date: new Date(2023, 0, 10),
      title: 'New book',
      price: 30.99
    },
    {
      id: 'e2',
      date: new Date(2023, 0, 10),
      title: 'New Jeans',
      price: 99.99
    },

  ]
const App = () => {
  const [expenses, setExpenses] = useState
    (DUMMY_EXPENSES)


  const addExpensehandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses) => {
      return ([expenses, ...previousExpenses])
  }) 
  }

  console.log(expenses)
  return (
    <div className="App">
    <h1>sus</h1>
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      <Expenses expensesData={DUMMY_EXPENSES}></Expenses>
    </div>
    );
  }

export default App;

