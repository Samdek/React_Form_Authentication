import "./profile.css"
import samImg from "./sam.jpg"

export default function Profile() {
    return(
        <div className="container">
            <div className="nav">
                <section>
                    <div className="profile_btn grey">
                        <img src={samImg} alt="Sam's Face" />
                        <div className="profile_name">
                            <h5>Samuel Adekoya</h5>
                            <p>FRONTEND_DEV</p>
                        </div>
                    </div>
                    <div>
                        <p className="sub_topic">GENERAL</p>
                        <div className="grey app">
                            <i class="fa-brands fa-app-store-ios"></i>
                            <p>App</p>
                        </div>
                    </div>
                    <div>
                        <p className="sub_topic">MANAGEMENT CONSOLE</p>
                        <div className="light">
                            <i class="fa-solid fa-user"></i>
                            <p>Author</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                        <div className="light">
                            <i class="fa-solid fa-desktop"></i>
                            <p>Website Developer</p>
                            <i class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>

                </section>
                 <button className="btn">Log out</button>
            </div>
            <div className="main">
                <header>
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" />
                    </div>
                    <img src={samImg} alt="Sam's Face"/>
                </header>
                <h2>Welcome back, <br/> Samuel Adekoya! <i class="fa-solid fa-hand"></i></h2>
                <div>
                    <div className="box yellow">
                        <i class="fa-solid fa-users"></i>
                        <h2>10</h2>
                        <p>Total Users</p>
                    </div>
                    <div className="box blue">
                        <i class="fa-solid fa-basket-shopping"></i>
                        <h2>05</h2>
                        <p>Total Subscribed Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}