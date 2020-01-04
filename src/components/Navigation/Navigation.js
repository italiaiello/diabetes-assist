import React from 'react';
import MealPlannerIcon from '../../images/meal.svg';
import HealthIcon from '../../images/Health.svg';
import AppointmentIcon from '../../images/appointment.svg';
import CybelIcons from '../../images/Cybel.svg';
import EmergencyIcon from '../../images/Emergency.svg';

const Navigation = props => {

    const onButtonClick = (route) => {
        console.log(props.todoTasks)
        props.onRouteChange(route)
    }

    return (
        <nav id="navigationBar">
            <div id="navButtons">
                <figure>
                    <img src={HealthIcon} alt="Icon for My Health section" onClick={onButtonClick.bind(this, 'health')} />
                    <p>My Health</p>
                </figure>
                <figure>
                    <img src={AppointmentIcon} alt="Icon for the Book Appointment section" onClick={props.onRouteChange.bind(this, 'appointment')} />
                    <p>Appointments</p>
                </figure>
                <figure>
                    <img src={MealPlannerIcon} alt="Icon for the Meal Planner section" onClick={props.onRouteChange.bind(this, 'meal')} />
                    <p>Meal Planner</p>
                </figure>
                <figure>
                    <img src={CybelIcons} alt="Icon for Cybel" onClick={props.onRouteChange.bind(this, 'cybel')} />
                    <p>Cybel</p>
                </figure>
            </div>
            <figure id="emergency">
                <img src={EmergencyIcon} alt="Icon for making an emergency call" onClick={props.onRouteChange.bind(this, 'emergency')} />
                <p>Emergency Call</p>
            </figure>
        </nav>
    )
}

export default Navigation