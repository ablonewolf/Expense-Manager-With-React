import '../styles/ExpenseForm.css';
import {useState} from "react";

export const ExpenseForm = () => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    // const [enteredDescription, setEnteredDescription] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
        enteredDescription: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput({
            enteredTitle: event.target.value,
            ...userInput
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            enteredAmount: event.target.value,
            ...userInput
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            enteredDate: event.target.value,
            ...userInput
        })
    }

    const descriptionChangeHandler = (event) => {
        setUserInput({
            enteredDescription: event.target.value,
            ...userInput
        })
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='1' step='1' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-09-30' onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Description</label>
                    <input type='text' onChange={descriptionChangeHandler}/>
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