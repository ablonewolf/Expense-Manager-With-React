import ExpenseItem from "./ExpenseItem";
import React from "react";
import './Expenses.css';

export function DisplayExpenses(props) {
    return (
        // eslint-disable-next-line array-callback-return
        <div className='expenses'>
            {props.expenses.map(expenseItem => {
                return <ExpenseItem
                    expense={expenseItem}
                />
            })}
        </div>
    )
}