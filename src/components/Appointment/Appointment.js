import React from 'react'
import Alice from '../../images/Health_Professionals/AliceManini.png'
import Camille from '../../images/Health_Professionals/CamilleGreen.png'
import Danielle from '../../images/Health_Professionals/DanielleBrown.png'
import Squires from '../../images/Health_Professionals/SquiresBrown.png'
import HomeButton from '../../images/Home.svg'

const Appointment = props => {
    return (
        <div className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
                        <p>Back</p>
                    </div>
                    <h1>Choose a Health Professional</h1>
                </div>
            </div>
            <nav className="filter">
                <button className="active">All</button>
                <button>Most Recent</button>
                <button>Recommended</button>
            </nav>
            <article className="healthProfessionals">
                <article className="professional">
                    <figure>
                        <img src={Alice} alt="Health Professional Alice" />
                    </figure>
                    <div className="HPInfo">
                        <h3>Alice Manini</h3>
                        <p>Specialty: Diabetes Health Professional
                            <br/>
                            Location: Ashfield Health Care
                        </p>
                    </div>
                    <div className="rightArrow appointmentArrow" onClick={props.onRouteChange.bind(this, 'meal')}></div>
                </article>
                <article className="professional">
                    <figure>
                        <img src={Camille} alt="Health Professional Camille" />
                    </figure>
                    <div className="HPInfo">
                        <h3>Camille Green</h3>
                        <p>Specialty: Diabetes Health Professional
                            <br/>
                            Location: Camille&#39;s Gealth Centre
                        </p>
                    </div>
                    <div className="rightArrow appointmentArrow" onClick={props.onRouteChange.bind(this, 'meal')}></div>
                </article>
                <article className="professional">
                    <figure>
                        <img src={Danielle} alt="Health Professional Danielle" />
                    </figure>
                    <div className="HPInfo">
                        <h3>Danielle Brown</h3>
                        <p>Specialty: Diabetes Health Professional
                            <br/>
                            Location: Strathfield Hospital
                        </p>
                    </div>
                    <div className="rightArrow appointmentArrow" onClick={props.onRouteChange.bind(this, 'meal')}></div>
                </article>
                <article className="professional">
                    <figure>
                        <img src={Squires} alt="Health Professional Squires" />
                    </figure>
                    <div className="HPInfo">
                        <h3>Squires Brown</h3>
                        <p>Specialty: Diabetes Health Professional
                            <br/>
                            Location: Camille&#39;s Gealth Centre
                        </p>
                    </div>
                    <div className="rightArrow appointmentArrow" onClick={props.onRouteChange.bind(this, 'meal')}></div>
                </article>
            </article>
            <figure className="homeButton">
                <img src={HomeButton} alt="Home button" onClick={props.onRouteChange.bind(this, 'home')}/>
            </figure>
        </div>
    )
}

export default Appointment