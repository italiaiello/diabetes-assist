import React, { useState } from 'react'
import Logo from '../../images/DA_logo.svg'
import ErrorIcon from '../../images/Error.svg'

const SignIn = props => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isValid, setIsValid] = useState(true)

    const [isSigningIn, setIsSigningIn] = useState(false)

    const onEmailChange = e => { 
        setEmail(e.target.value)
        setIsValid(true); 
    }
    const onPasswordChange = e => { 
        setPassword(e.target.value) 
        setIsValid(true);
    }

    const onSubmitSignIn = () => {
        setIsSigningIn(true)
        fetch('https://floating-waters-62169.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                props.loadUser(user)
                props.onRouteChange('home')
            } else {
                setIsValid(false);
            }
            setIsSigningIn(false)
        })
        .catch (err => {
            console.log(err)
            setIsSigningIn(false)
        })

    }


    return (
        <article id="signin">
            <figure className="logo">
                <img src={Logo} alt="Diabetes Assist Logo" />
            </figure>
            <form className="form">
                <input className="inputField" type="text" placeholder="Email" onChange={onEmailChange} />
                <input className="inputField" type="password" placeholder="Password" onChange={onPasswordChange} />
                <div className={!isValid ? 'formError show' : 'hide'}>
                    <figure className="errorIcon">
                        <img src={ErrorIcon} alt="Error symbol" />
                    </figure>
                    <p>Username or password is incorrect</p>
                </div>
                <button className="formButton" type="button" onClick={onSubmitSignIn}>Sign In</button>
                <p>Don't have an account?
                    <br/><br/>
                    <span className="alternateFormLink" onClick={() => props.onRouteChange('register')}>Register</span>
                </p>
            </form>
            <div className={isSigningIn ? "show submitFormPopUp" : "hide submitFormPopUp"}>
                <p>Signing in...</p>
            </div>
        </article>
    )
}

export default SignIn