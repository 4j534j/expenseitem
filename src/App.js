import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem"
function App() {
  const expenses =  [ 
    {
    date : new Date(2023, 0, 10),
    title: "New book",
    price: 5.99
    },
    {
      date : new Date(2023, 0, 10),
      title: "Jeans",
      price: 6.99
    }
  ]
  return (
    <div className="App">
      <ExpenseItem ExpenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem ExpenseData={expenses[1]}></ExpenseItem>
    </div>

  );
}

export default App;
