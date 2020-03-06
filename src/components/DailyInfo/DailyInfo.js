import React, {useState, useEffect} from 'react';
import TodoList from '../../components/TodoList/TodoList'

const DailyInfo = props => {

    const name = props.userName.toUpperCase();

    const onSignOut = () => {
        props.setIsSigningOut(true)
        fetch('https://floating-waters-62169.herokuapp.com/signout', {
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
            <article id="welcome-signout">
                <h1 id="welcome">Welcome, <span>{name}</span></h1>
                <div id="signout">
                    <button onClick={onSignOut} >Sign Out</button>
                </div>
            </article>
            <h2 id="today">TODAY</h2>
            <TodoList todoTasks={props.todoTasks} setTodoTasks={props.setTodoTasks} />
        </section>
    )
}

export default DailyInfo