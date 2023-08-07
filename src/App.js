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
                title={expenses[0].title}
                date={expenses[0].date}
                amount={expenses[0].amount}
                description={expenses[0].description}
            />
            <ExpenseItem
                title={expenses[1].title}
                date={expenses[1].date}
                amount={expenses[1].amount}
                description={expenses[1].description}
            />
            <ExpenseItem
                title={expenses[2].title}
                date={expenses[2].date}
                amount={expenses[2].amount}
                description={expenses[2].description}
            />
        </div>
    );
}

export default App;
