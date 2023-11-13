import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpensesFilter.js'
import "./Expenses.css"
import Card from '../UI/Card'

const Expenses = (props) => {

	const [expenseFilter, setExpenseFilter] = useState('2023')

	const addExpenseFilterHandler = ((expenseFilter) => {
        console.log('In Expenses.js')
        console.log(expenseFilter)
        setExpenseFilter(expenseFilter)
    })

	
	const filterChangeHandler = (year) => {
		console.log('Filter  change handled by Ex)penses.js')
		console.log(expenseFilter, + 'in Expenses.js')
		setExpenseFilter(expenseFilter)
	}
	// console.log(props.expensesData)
	// props.expensesData.map((expense) => {
	// 	console.log(expense)
	// })

	return (
		<Card className="expenses">
            <ExpenseFilter selected={expenseFilter}
            onChangeFilter={filterChangeHandler}
            onAddExpenseFilter={addExpenseFilterHandler}
            ></ExpenseFilter>
			{
				props.expensesData.map((expense) => {
					
					if (expense.date.getFullYear().toString() === expenseFilter){
                        return <ExpenseItem
            
                        id={expense.id}
                        title={expense.title}
                        amount={expense.price}
                        date={expense.date}
                    ></ExpenseItem>  
                    } 
                    
                
                    else {
                        return null}
                    
                    }) 
            }             
		</Card>
	)

	props.expensesData.map((expense) => {
		console.log(expense)
	})

}

export default Expenses