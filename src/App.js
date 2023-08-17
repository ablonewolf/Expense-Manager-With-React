import {DisplayExpenses} from "./components/Expenses/DisplayExpenses";
import './components/Expenses/styles/Expenses.css';
import {NewExpense} from "./components/Expenses/NewExpense/NewExpense";
import {useState} from "react";

function App() {

    const expenses = [
        {
            id: 1,
            title: "Lunch at DU Cafe",
            date: new Date(2021, 2, 18),
            amount: 100,
            description: "Outdoor lunch as I was in DU Campus."
        },
        {
            id: 2,
            title: "Phone Back-cover",
            date: new Date(2021, 5, 24),
            amount: 300,
            description: "New Back cover for newly bought smartphone. "
        },
        {
            id: 3,
            title: "Bus Fare",
            date: new Date(2021, 3, 11),
            amount: 30,
            description: "Bus Journey from Mirpur to Gulshan."
        }
    ]
    const [expenseData, setExpenseData] = useState(expenses);
    const addExpenseHandler = (addedExpenseData) => {
        const newExpense = {
            id: expenses.length + 1,
            ...addedExpenseData
        }
        setExpenseData((prevExpenses) => {
            return [...prevExpenses, newExpense];
        });
    }

    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <DisplayExpenses
                expenses={expenseData}
            />
        </>
    );
}

export default App;
