import React from 'react';
import MealPlannerIcon from '../../images/meal.svg';
import HealthIcon from '../../images/Health.svg';
import AppointmentIcon from '../../images/appointment.svg';
import CybelIcons from '../../images/Cybel.svg';
import EmergencyIcon from '../../images/Emergency.svg';

const Navigation = () => {
    return (
        <nav id="navigationBar">
            <div id="navButtons">
                <figure>
                    <img src={HealthIcon} alt="Icon for My Health section" />
                    <p>My Health</p>
                </figure>
                <figure>
                    <img src={AppointmentIcon} alt="Icon for the Book Appointment section" />
                    <p>Meal Planner</p>
                </figure>
                <figure>
                    <img src={MealPlannerIcon} alt="Icon for the Meal Planner section" />
                    <p>Meal Planner</p>
                </figure>
                <figure>
                    <img src={CybelIcons} alt="Icon for Cybel" />
                    <p>Cybel</p>
                </figure>
            </div>
            <figure id="emergency">
                <img src={EmergencyIcon} alt="Icon for the My Health section" />
                <p>Emergency Call</p>
            </figure>
        </nav>
    )
}

export default Navigation