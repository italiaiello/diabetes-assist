import React from 'react'
import HomeButton from '../../images/Home.svg'
import Bell from '../../images/notifications.svg'
import Person from '../../images/Person.png'

const Health = props => {
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
            <article id="healthSection">
                <article id="healthData">
                    <article id="routine">
                        <h3>Medication Routine</h3>
                        <figure>
                            <img src={Bell} alt="Notifications bell" />
                        </figure>
                        <button id="change">Change</button>
                    </article>
                    <article id="bglGraph">
                        <h3>Blood Glucose Level History</h3>
                    </article>
                </article>
                <article id="account">
                    <figure>
                        <img src={Person} />
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