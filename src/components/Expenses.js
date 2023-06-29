import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

export default function Expenses(){

    const expenses = [
        {title : 'Car Insurance1' , amount:294.67 , date: new Date(2022, 2, 14)},
        {title : 'Car Insurance2' , amount:294.67 , date: new Date(2022, 2, 14)},
        {title : 'Car Insurance3' , amount:294.67 , date: new Date(2022, 2, 14)}
      ]
    
    return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      <ExpenseItem title = {expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title = {expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title = {expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    </Card>
    );
}