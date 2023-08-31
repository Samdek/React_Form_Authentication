import { Link } from "react-router-dom"
import React from "react"
import { type } from "@testing-library/user-event/dist/type"

export default function CreateAcc() {

    const [formData, setFormData] = React.useState({
        firstName: "" ,
        lastName: "" ,
        email: "" ,
        password: "" ,
        agreedTerm: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevForm => {
            return {
                ...prevForm,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit() {
        localStorage.setItem("userFormData", JSON.stringify(formData))
    }

    return(
        <main className="App">
            <div>
                <form className="register_form" >
                    <h2>Sign up with your email</h2>
                    <p>Already have an account? <Link to="/login">Sign in</Link></p>

                    <div className="input_container">
                        <label htmlFor="firstName">First name</label>
                        <input onChange={handleChange} id="firstName" name="firstName" value={formData.firstName} /> 
                    </div>
                    <div className="input_container">
                        <label htmlFor="lastName">Last name</label>
                        <input onChange={handleChange} id="lastName" name="lastName" value={formData.lastName} />
                    </div>
                    <div className="input_container">
                    <label htmlFor="email">Email address</label>
                        <input onChange={handleChange} id="email" type="email" name="email" value={formData.email} />
                    </div>
                    <div className="input_container">
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} id="password" type="password"  name="password" value={formData.password} />
                    </div>
                    <div className="check_container">
                        <input onChange={handleChange} type="checkbox" id="agreeTerms" className="input_check" name="agreedTerm" checked={formData.agreedTerm}/>
                        <label htmlFor="agreeTerms">I agree to the <a href="https://www.github.com/Samdek">Terms of Service</a> and <a href="https://www.github.com/Samdek">Privacy Policy</a></label>
                    </div>

                    <Link to="/login"><button onClick={handleSubmit}>Create account</button></Link>
                </form>
            </div>
        </main>
    )
}
