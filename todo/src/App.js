import ExpenseItem from "./component/expenseItem";

function App() {
  const expense = [
    { id: 0, title: "Car Insurance", amout: 697.64, date: new Date(2021, 2, 11) },
    { id: 1,title: "Grocery", amout: 597.64, date: new Date(2021, 2, 12) },
    { id: 2,title: "Coffee", amout: 497.64, date: new Date(2021, 2, 13) },
    { id: 3,title: "Tea", amout: 397.64, date: new Date(2021, 2, 14)},
    { id: 4,title: "Bike Service", amout: 197.64, date: new Date(2021, 2, 15) },
  ];
  return (
    <div>
      <ExpenseItem title={expense[0].title} amout={expense[0].amount} price={expense[0].date} />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
