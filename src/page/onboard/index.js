import React from 'react';
import "./onboard.css"
import image from "./onboard.png"
import {useNavigate, Link} from 'react-router-dom'
function OnboardPage () {

    const styleOnClick = (e) => {
        e.target.style.backgroundColor = "#B0BAB8"
        e.target.style.color = "white"
    }
    const navigateLogin = useNavigate()
    return(
        <section className="section">
            <img src={image}/>
            <h1> QuizzMe</h1>
            <h2>Test your knowledge!</h2>
            <button
                onClick= {() => navigateLogin('/register')}
                onMouseDown={styleOnClick}
                className="sign-up-btn"> SIGN UP</button>
            <p>ALREADY HAVE AN ACCOUNT? <Link to="/login" className="link">LOG IN</Link></p>
        </section>
    )
}

export default OnboardPage;