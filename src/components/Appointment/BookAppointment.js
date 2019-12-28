import React from 'react'
import Calendar from '../../images/calendar.svg'

const BookAppointment = props => {
    return (
        <article className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'appointment')}></div>
                        <p>Back</p>
                    </div>
                    <h1>My Health</h1>
                </div>
            </div>
            <div id="dateSelection">
                <figure>
                    <img src="hello" alt="Camille Green" />
                    <p>Camille Green</p>
                </figure>
                <div id="selectDate">
                    <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
                    <p>{Date.now()}</p>
                    <div className="rightArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
                </div>
                <figure>
                    <img src={Calendar} alt="Calendar button" />
                </figure>
            </div>
            <article>
                <div className=""></div>
            </article>
        </article>
    )
}

export default BookAppointment