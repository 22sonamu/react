
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {title : 'Car Insurance1' , amount:294.67 , date: new Date(2022, 2, 14)},
    {title : 'Car Insurance2' , amount:294.67 , date: new Date(2022, 2, 14)},
    {title : 'Car Insurance3' , amount:294.67 , date: new Date(2022, 2, 14)}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title = {expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title = {expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title = {expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
