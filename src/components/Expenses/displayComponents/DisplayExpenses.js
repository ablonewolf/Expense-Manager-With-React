import ExpenseItem from "./ExpenseItem";
import React from "react";
import '../styles/Expenses.css';

export const DisplayExpenses = (props) => {
    const expenseData = props.filteredYear === 'all' ? props.expenses : props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === props.filteredYear;
    })
    return (
        // eslint-disable-next-line array-callback-return
        <>
            <h1>Expense Item List</h1>
            {expenseData.map(expenseItem => {
                return <ExpenseItem
                    key={expenseItem.id}
                    amount={expenseItem.amount}
                    title={expenseItem.title}
                    description={expenseItem.description}
                    date={expenseItem.date}
                />
            })}
        </>
    )
}