import { Link } from "react-router-dom"

export default function CreateAcc() {
    return(
        <main className="App">
            <div>
                <form className="register_form" >
                    <h2>Sign up with your email</h2>
                    <p>Already have an account? <Link to="/login">Sign in</Link></p>

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
        </main>
    )
}
