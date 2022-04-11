import './ExpenseItem.css'

function ExpenseItem() {

    const expenseDate = new Date(2022,4,11);
    const expenseTitle = "Car Insurance";
    const expensePrice = 297.67;

    return (<>
        <div className="expense-item" >
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price" >${expensePrice}</div>
            </div>
        </div>
      </>
    )
}

export default ExpenseItem;