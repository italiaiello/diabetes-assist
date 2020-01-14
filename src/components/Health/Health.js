import React, { useState } from 'react'
import HomeButton from '../../images/Home.svg'
import Bell from '../../images/notifications.svg'
import Person from '../../images/Person.png'
import Routine from '../Health/Routine'
import Modal from '../Modal/Modal'
import RoutineEdit from './RoutineEdit'

const Health = props => {

    let daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [isProfileOpen, setIsProfileOpen] = useState(false)

    const toggleModal = () => {
        console.log(isProfileOpen)
        setIsProfileOpen(!isProfileOpen)
    }

    return (
        <article className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
                        <p>Back</p>
                    </div>
                    <h1>My Health</h1>
                </div>
            </div>
            {
                isProfileOpen &&
                <Modal>
                    <RoutineEdit setIsProfileOpen={setIsProfileOpen} toggleModal={toggleModal}/>
                </Modal>
            }
            <article id="healthSection">
                <article id="healthData">
                    <article id="routine">
                        <div id="routineHeader">
                            <h2>Medication Routine</h2>
                            <figure>
                                <img src={Bell} alt="Notifications bell" />
                            </figure>
                            <button id="change" onClick={toggleModal}>Change</button>
                        </div>
                        <div id="routineContent">
                            {
                                daysOfWeek.map((day, i) => {
                                    return (
                                        <Routine 
                                            key={i}
                                            dayOfWeek={daysOfWeek[i]}
                                            medication="Metformin"
                                        />
                                    )
                                })
                            }
                        </div>
                    </article>
                    <article id="bglGraph">
                        <h3>Blood Glucose Level History</h3>
                    </article>
                </article>
                <article id="account">
                    <figure>
                        <img src={Person} alt="Person" />
                    </figure>
                    <p>Aysha<br/>Whitmore</p>

                </article>
            </article>
            <figure className="homeButton">
                <img src={HomeButton} alt="Home button" onClick={props.onRouteChange.bind(this, 'home')} />
            </figure>
        </article>
    )
}

export default Health