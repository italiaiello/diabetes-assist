import React, {useState, useEffect} from 'react';
import TodoList from '../../components/TodoList/TodoList'

const DailyInfo = props => {

    
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const time = setInterval(() => tick(), 1000)

        return () => clearInterval(time)
    }, [date])

    const tick = () => {
        setDate(new Date())
    }
        
    return (
        <section id="dailyInfo">
            <article id="time-signout">
                <div id="time">
                    <h2>{date.toLocaleTimeString().substring(0, 5)}</h2>
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