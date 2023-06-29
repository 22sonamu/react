import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card';
function ExpenseItem(props){    
    const expenses = [
        {title : 'Car Insurance1' , amount:294.67 , date: new Date(2022, 2, 14)},
        {title : 'Car Insurance2' , amount:294.67 , date: new Date(2022, 2, 14)},
        {title : 'Car Insurance3' , amount:294.67 , date: new Date(2022, 2, 14)}
      ]
    

    return (
    <Card className="expense-item ">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card> )
}

export default ExpenseItem;