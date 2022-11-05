import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return(
        <main className="App">
            <div>
                <form className="login_form">
                    <h2>Sign in with your email</h2>
                    <p>Dont have an account? <Link to="/register">Sign up</Link></p>

                    <div className="input_container">
                    <label htmlFor="email">Email address</label>
                        <input id="email" type="email" />
                    </div>
                    <div className="input_container">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" />
                    </div>
//                        className="login-btn"
//                     <button><Link to="/profile">Continue</Link></button>
            <button><Link to="/profile">Create account</Link></button>
                </form>
                <a href="https://www.github.com/Samdek" className="forgot_password_link">Forgot your password?</a>
            </div>
        </main>
    )

}
