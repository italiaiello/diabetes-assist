import React from 'react';
import TodoList from '../../components/TodoList/TodoList'

const DailyInfo = props => {

    return (
        <section id="dailyInfo">
            <article id="time-signout">
                <div id="time">
                    <h2>11:11 AM</h2>
                </div>
                <div id="signout">
                    <button>Sign Out</button>
                </div>
            </article>
            <h1 id="welcome">Welcome, <span>AYSHA</span></h1>
            <h2 id="today">TODAY</h2>
            <TodoList />
        </section>
    )
}

export default DailyInfo