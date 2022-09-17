export default function Login() {
    return(
        <div>
            <form className="login_form">
                <h2>Sign in with your email</h2>
                <p>Dont have an account? <a href="">Sign in</a></p>

                <div className="input_container">
                <label htmlFor="email">Email address</label>
                    <input id="email" type="email" />
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                </div>

                <button className="login-btn">Continue</button>
            </form>
            <a href="" className="forgot_password_link">Forgot your password?</a>
        </div>  
    )

}