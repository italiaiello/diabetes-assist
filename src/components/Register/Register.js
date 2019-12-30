import React, { useState } from 'react'
import Logo from '../../images/DA_logo.svg'

const Register = props => {

    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [diagnosis, setDiagnosis] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const [counter, setCounter] = useState(0)
    const [step, setStep] = useState('Step 1')

    const changeText = e => {
        if (counter === 2) {
            setCounter(0)
            setStep('Step 1')
        } else {
            setCounter(counter + 1)
            setStep(`Step ${counter + 2}`)
            console.log(counter)
        }
    }

    const onNameChange = e => { setUserName(e.target.value) }
    const onAgeChange = e => { setAge(e.target.value) }
    const onGenderChange = e => { setGender(e.target.value) 
        console.log(e.target.value) }
    const onWeightChange = e => { setWeight(e.target.value) }
    const onHeightChange = e => { setHeight(e.target.value) }
    const onDiagnosisChange = e => { setDiagnosis(e.target.value) }
    const onPasswordChange = e => { setPassword(e.target.value) }
    const onConfirmedPasswordChange = e => { setConfirmedPassword(e.target.value) }

    return (
        <article id="signin">
            <figure>
                <img src={Logo} alt="Diabetes Assist Logo" />
            </figure>
            <h2>{step}</h2>
            <form className="form">
                <div id="firstStep" className={counter === 0 ? 'show' : 'hide'}>
                    <input className="inputField" type="text" placeholder="Name" onChange={onNameChange}/>
                    <input className="inputField" type="password" placeholder="Age" onChange={onAgeChange} />
                    <div className="dropdownWrapper">
                        <select className="dropdown" name="Gender" onChange={onGenderChange} >
                            <option value="Male">Please choose a gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Rather not say">Rather not say</option>
                        </select>
                    </div>
                </div>
                <div id="secondStep" className={counter === 1 ? 'show' : 'hide'}>
                    <input className="inputField" type="text" placeholder="Weight" onChange={onWeightChange} />
                    <input className="inputField" type="password" placeholder="Height" onChange={onHeightChange} />
                    <input className="inputField" type="password" placeholder="Diagnosis" onChange={onDiagnosisChange} />
                </div>
                <div id="thirdStep" className={counter === 2 ? 'show' : 'hide'}>
                    <input className="inputField" type="password" placeholder="Password" onChange={onPasswordChange} />
                    <input className="inputField" type="password" placeholder="Confirm password" onChange={onConfirmedPasswordChange} />
                </div>
                <button className={counter < 2 ? 'formButton show' : 'formButton hide'} onClick={changeText} type="button">Next Step</button>
                <button className={counter === 2 ? 'formButton show' : 'formButton hide'} type="submit">Register</button>
                <p>Already have an account?
                    <br/><br/>
                    <span className="alternateFormLink" onClick={props.onRouteChange.bind(this, 'signin')}>Sign In</span>
                </p>
            </form>
        </article>
    )
}

export default Register