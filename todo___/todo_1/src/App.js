import Expenses from "./Component/Expenses";
function App() {
  const expenses = [
    {
      id: 0,
      title: "Car Insurance",
      price: 297.68,
      date: new Date(2021, 2, 25),
    },
    {
      id: 1,
      title: "Washing Car",
      price: 97.68,
      date: new Date(2021, 2, 25),
    },
    {
      id: 2,
      title: "Grocery",
      price: 1097.68,
      date: new Date(2021, 2, 25),
    },
    {
      id: 3,
      title: "Bike Insurance",
      price: 6697.68,
      date: new Date(2021, 2, 25),
    },
    {
      id: 4,
      title: "Clothing Expenses",
      price: 2297.68,
      date: new Date(2021, 2, 25),
    }
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
