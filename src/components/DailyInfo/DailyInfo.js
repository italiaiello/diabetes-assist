import React, {useState, useEffect} from 'react';
import TodoList from '../../components/TodoList/TodoList'

const DailyInfo = props => {

    
    const [date, setDate] = useState(new Date())
    const name = props.userName.toUpperCase();

    useEffect(() => {
        const time = setInterval(() => tick(), 1000)

        return () => clearInterval(time)
    }, [date])

    const tick = () => {
        setDate(new Date())
    }

    const onSignOut = () => {
        props.setIsSigningOut(true)
        fetch('http://localhost:3000/signout', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: props.userEmail,
                tasks: props.todoTasks
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'success') {
                props.setIsSigningOut(false)
                props.onRouteChange('start')
            }
        })
        .catch (err => console.log(err));
        
    }
        
    return (
        <section id="dailyInfo">
            <article id="time-signout">
                <div id="time">
                    <h2>{date.toLocaleTimeString().substring(0, 5)}</h2>
                </div>
                <div id="signout">
                    <button onClick={onSignOut} >Sign Out</button>
                </div>
            </article>
            <h1 id="welcome">Welcome, <span>{name}</span></h1>
            <h2 id="today">TODAY</h2>
            <TodoList todoTasks={props.todoTasks} setTodoTasks={props.setTodoTasks} />
        </section>
    )
}

export default DailyInfo