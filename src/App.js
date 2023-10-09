import {DisplayExpenses} from "./components/Expenses/DisplayComponents/DisplayExpenses";
import './components/Expenses/styles/Expenses.css';
import {NewExpense} from "./components/Expenses/NewExpense/NewExpense";
import {useState} from "react";
import {ExpensesFilter} from "./components/Expenses/FilterComponent/ExpensesFilter";
import {Card} from "./components/UI/Card";

function App() {

    const expenses = [
        {
            id: 1,
            title: "Lunch at DU Cafe",
            date: new Date(2020, 2, 18),
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
            date: new Date(2022, 3, 11),
            amount: 30,
            description: "Bus Journey from Mirpur to Gulshan."
        },
        {
            id: 4,
            title: "New Phone",
            date: new Date(2023, 5, 22),
            amount: 35000,
            description: "New Phone as the previous phone was stolen."
        }
    ]
    const [expenseData, setExpenseData] = useState(expenses);
    const [filteredYear, setFilteredYear] = useState('all');

    const yearChangeHandler = (year) => {
        setFilteredYear(year);
    }
    const addExpenseHandler = (addedExpenseData) => {
        if (addedExpenseData.title && addedExpenseData.date && addedExpenseData.amount
            && addedExpenseData.description) {
            const newExpense = {
                id: expenses.length + 1,
                ...addedExpenseData
            }
            setExpenseData((prevExpenses) => {
                return [...prevExpenses, newExpense];
            });
        }
    }

    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    yearChangeHandler={yearChangeHandler}
                />
                <DisplayExpenses
                    filteredYear={filteredYear}
                    expenses={expenseData}
                />
            </Card>

        </>
    );
}

export default App;
