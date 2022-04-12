import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './Expenses.css'
function Expenses(props) {
  return (
    <>
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          price={props.items[2].price}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          price={props.items[3].price}
          date={props.items[3].date}
        />
        <ExpenseItem
          title={props.items[4].title}
          price={props.items[4].price}
          date={props.items[4].date}
        />
      </Card>
    </>
  );
}

export default Expenses;
