

function Login() {
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


function CreateAcc() {
    return(
        <div>
            <form className="register_form" >
                <h2>Sign up with your email</h2>
                <p>Already have an account? <a href="">Sign in</a></p>

                <div className="input_container">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" /> 
                </div>
                <div className="input_container">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" />
                </div>
                <div className="input_container">
                <label htmlFor="email">Email address</label>
                    <input id="email" type="email" />
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" />
                </div>
                <div className="check_container">
                    <input type="checkbox" id="agreeTerms" className="input_check" />
                    <label htmlFor="agreeTerms">I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></label>
                </div>
    
                <button>Create account</button>
            </form>
        </div>  
    )
}

function App() {
    return(
        <main>
            {/* <Login /> */}
            <CreateAcc />
        </main>
    )
    
}



ReactDOM.render(<App />, document.getElementById("root"))