import ExpenseItem from "./ExpenseItem";
import React from "react";
import '../styles/Expenses.css';

export const DisplayExpenses = (props) => {
    return (
        // eslint-disable-next-line array-callback-return
        <>
            <h1>Expense Item List</h1>
            {props.expenses.map(expenseItem => {
                return <ExpenseItem
                    expense={expenseItem}
                />
            })}
        </>
    )
}