import React from "react";
import '../styles/Expenses.css';
import '../styles/ExpenseList.css'
import {ExpenseList} from "./ExpenseList";

export const DisplayExpenses = (props) => {
    const expenseData = props.filteredYear === 'all' ? props.expenses : props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === props.filteredYear;
    })
    if (expenseData.length === 0) {
        return (
            <h2 className='expenses-list__fallback'>
                Found no Expenses for this year.
            </h2>
        )
    }
    return (
        // eslint-disable-next-line array-callback-return
        <>
            <h1>Expense Item List</h1>
            <ExpenseList
                expenseData={expenseData}
            />
        </>
    )
}