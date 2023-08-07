import ExpenseItem from "./components/ExpenseItem";

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

    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem
                expense = {expenses[0]}
            />
            <ExpenseItem
                expense = {expenses[1]}
            />
            <ExpenseItem
                expense = {expenses[2]}
            />
        </div>
    );
}

export default App;
