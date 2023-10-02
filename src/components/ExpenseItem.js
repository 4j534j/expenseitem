import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseDate"
const ExpenseItem = (props) => {
	const day = props.ExpenseData.date.toLocaleString("en-US", {day: "2-digit"})
	const month = props.ExpenseData.date.toLocaleString("en-US", {month: "long"})
	const year = props.ExpenseData.date.getFullYear()
	
	return (
		<div className = "expense-item">
			<ExpenseDate date={props.ExpenseData.date}></ExpenseDate>
			<div className= "expense-item__description">
				<h2> {props.ExpenseData.title} </h2>
				<div className="expense-item__price">{props.ExpenseData.price}</div>
			</div>
		</div>
		)
}

export default ExpenseItem