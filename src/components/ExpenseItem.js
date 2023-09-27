import "./ExpenseItem.css"

const ExpenseItem = (props) => {
	console.log(props)
	return(
		<div className = "expense-item">
			<div> {props.ExpenseData.date.toString()}</div>
			<div className= "expense-item__description">
				<h2> {props.ExpenseData.title} </h2>
				<div className="expense-item__price">{props.ExpenseData.price}</div>
			</div>
		</div>
		)
}

export default ExpenseItem