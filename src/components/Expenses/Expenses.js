import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpensesFilter.js'
import "./Expenses.css"
import Card from '../UI/Card'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = 
	useState('2023')

	console.log('Year data in Expenses.js' + filteredYear)

	const filterChangeHandler = (year) => {
		console.log('Filter  change handled by Expenses.js')
		console.log(year, + 'in Expenses.js')
		setFilteredYear(year)
	}
	console.log(props.expensesData)
	props.expensesData.map((expense) => {
		console.log(expense)
	})

	return (
		<Card className="Expenses">
			<ExpenseFilter selected={filteredYear}
				onChangeFilter={filterChangeHandler}
				> </ExpenseFilter>
			{
				props.expensesData.map((expense) => {
					return <ExpenseItem
						id={expense.id}
						title={expense.title}
						amount={expense.price}
						date={expense.date}
					></ExpenseItem>
				})
			}
		</Card>
	)

	props.expensesData.map((expense) => {
		console.log(expense)
	})

}

export default Expenses