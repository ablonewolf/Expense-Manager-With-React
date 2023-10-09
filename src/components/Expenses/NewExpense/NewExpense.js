import '../styles/NewExpense.css';
import {ExpenseForm} from "./ExpenseForm";
import {useState} from "react";

export const NewExpense = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpense(enteredExpenseData);
    }

    const formOpenButtonHandler = () => {
        setFormOpen(true);
    }

    const formCloseButtonHandler = () => {
        setFormOpen(false);
    }

    return (
        <div className='new-expense'>
            {
                !formOpen &&
                <button onClick={formOpenButtonHandler}>
                    Add New Expense
                </button>}
            {
                formOpen &&
                <ExpenseForm
                    formCloseButtonHandler={formCloseButtonHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            }

        </div>
    )
}