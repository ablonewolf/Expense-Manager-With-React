import ExpenseItem from "./ExpenseItem";
import React from "react";

export function DisplayExpenses(props) {
    return (
        // eslint-disable-next-line array-callback-return
        <>
            {props.expenses.map(expenseItem => {
                return <ExpenseItem
                    expense={expenseItem}
                />
            })}
        </>
    )
}