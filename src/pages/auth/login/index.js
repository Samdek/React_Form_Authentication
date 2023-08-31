import React from "react"
import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {

    const existingData = JSON.parse(localStorage.getItem("userFormData"))
    const [statusMessage, setStatusMessage] = React.useState(false)
    const [willLogin, setWillLogin] = React.useState("")
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setLoginData(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    function StatusCheck() {
        if(existingData.email === loginData.email && existingData.password != loginData.password) {
            return <h5 className="status-message-fail">Incorrect password!</h5>
        } else if (existingData.password === loginData.password && existingData.email != loginData.email) {
            return <h5 className="status-message-fail">Incorrect email address!</h5>
        } else if (existingData.password != loginData.password && existingData.email != loginData.email) {
            return <h5 className="status-message-fail">Email and password are incorrect!</h5>
        } else{ 
            setWillLogin("/profile")
            return <h5 className="status-message-success">Welcome {existingData.firstName}, Click continue!</h5> 
        }
    }

    function handleSubmit() {
        setStatusMessage(true)
    }

    return existingData && (
        <main className="App">
            <div>
                <form className="login_form">
                    <h2>Sign in with your email</h2>
                    <p>Dont have an account? <Link to="/register">Sign up</Link></p>

                    <div className="status-message-container">
                        {statusMessage && <StatusCheck />}
                    </div>

                    <div className="input_container">
                    <label htmlFor="email">Email address</label>
                        <input onChange={handleChange} id="email" type="email" name="email" value={loginData.email} />
                    </div>
                    <div className="input_container">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} id="password" type="password"  name="password" value={loginData.password} />
                    </div>
                    <Link to={willLogin}><button onClick={handleSubmit} className="login-btn">Continue</button></Link>
                </form>
                <a href="https://www.github.com/Samdek" className="forgot_password_link">Forgot your password?</a>
            </div>
        </main>
    ) || (
     <div className="first-sign-up">
        <h1>You dont have an account yet!</h1>
        <h4>Use this link to sign up <Link to="/register">Sign up</Link></h4>
     </div>
    )
}