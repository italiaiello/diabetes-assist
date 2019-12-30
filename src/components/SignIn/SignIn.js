import React from 'react'
import Logo from '../../images/DA_logo.svg'

const SignIn = props => {
    return (
        <article id="signin">
            <figure>
                <img src={Logo} alt="Diabetes Assist Logo" />
            </figure>
            <form className="form">
                <input className="inputField" type="text" placeholder="Username" />
                <input className="inputField" type="password" placeholder="Password" />
                <button className="formButton" type="submit">Sign In</button>
                <p>Don't have an account?
                    <br/><br/>
                    <span className="alternateFormLink" onClick={props.onRouteChange.bind(this, 'register')}>Register</span>
                </p>
            </form>
        </article>
    )
}

export default SignIn