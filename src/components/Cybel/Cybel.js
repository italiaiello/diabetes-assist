import React from 'react'
import Technician from '../../images/technician.svg'
import Microphone from '../../images/microphone.svg'
import HomeButton from '../../images/Home.svg'

const Cybel = props => {
    return (
        <div className="pageDisplay">
            <div className="backAndHeading">
                <div className="sectionHeading">
                    <div className="back">
                        <div className="leftArrow" onClick={props.onRouteChange.bind(this, 'home')}></div>
                        <p>Back</p>
                    </div>
                </div>
            </div>
            <figure id="cybelRobot">
                <img src={Technician} alt="Cybel the robot" />
            </figure>
            <p>Talk to me about anything and I can give you advice
                <br />
                <br />
                Go ahead, I&#39;m listening...
            </p>
            <figure id="microphone">
                <img src={Microphone} alt="Voice command microphone" />
            </figure>
            <figure className="homeButton">
                <img src={HomeButton} alt="Home button" onClick={props.onRouteChange.bind(this, 'home')} />
            </figure>
        </div>
    )
}

export default Cybel