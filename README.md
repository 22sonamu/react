# JSX 뒤에서 벌어지는 일


--------



~~~jsx
return (
    <div>
        <h2> Let's get started!</h2>
        <Expenses items={expenses}>
    </div>
)
~~~

위의 코드를 아래로 변환한다.

~~~js
return React.createElement(
    'div', {}, 
    React.createElement('h2', {}, "Let's get started!"), React.createElement(Expenses, {items: expenses},)
    );
~~~