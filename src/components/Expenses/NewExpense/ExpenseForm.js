import '../styles/ExpenseForm.css';
import {useState} from "react";

export const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
        enteredDescription: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        })
    }

    const descriptionChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDescription: event.target.value};
        })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
            description: userInput.enteredDescription
        }
        props.onSaveExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
            enteredDescription: ''
        })
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='1' step='1' value={userInput.enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-09-30' value={userInput.enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Description</label>
                    <input type='text' value={userInput.enteredDescription} onChange={descriptionChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    );
}