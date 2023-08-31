import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUser, faDesktop, faBasketShopping, faUsers, faAppleAlt  } from '@fortawesome/free-solid-svg-icons'
import "./profile.css"
import samImg from "./sam.jpg"

export default function Profile() {
    const navigate = useNavigate()
    function fakeLogout() {
       
        console.log("logged out")
        localStorage.removeItem("userFormData")
        navigate("/login")
    }
    const existedName = JSON.parse(localStorage.getItem("userFormData"))
    return(
        <div className="container">
            <div className="nav">
                <section>
                    <div className="profile_btn grey">
                        <img src={samImg} alt="Sam's Face" />
                        <div className="profile_name">
                            <h5>{existedName.firstName} {existedName.lastName}</h5>
                            <p>FRONTEND_DEV</p>
                        </div>
                    </div>
                    <div>
                        <p className="sub_topic">GENERAL</p>
                        <div className="grey app">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"/></svg>
                            <p>App</p>
                        </div>
                    </div>
                    <div>
                        <p className="sub_topic">MANAGEMENT CONSOLE</p>
                        <div className="light">
                            <FontAwesomeIcon icon={faUser} />
                            <p>Author</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <div className="light">
                            <FontAwesomeIcon icon={faDesktop} />
                            <p>Website Developer</p>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>

                </section>
                 <button className="btn" onClick={fakeLogout}>Log out</button>
            </div>
            <div className="main">
                <header>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" />
                    </div>
                    <img src={samImg} alt="Sam's Face"/>
                </header>
                <h2>Welcome back, <br/> {existedName.firstName} {existedName.lastName}! <i className="fa-solid fa-hand"></i></h2>
                <div>
                    <div className="box yellow">
                        <FontAwesomeIcon icon={faUsers} />
                        <h2>10</h2>
                        <p>Total Users</p>
                    </div>
                    <div className="box blue">
                        <FontAwesomeIcon icon={faBasketShopping} />
                        <h2>05</h2>
                        <p>Total Subscribed Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}