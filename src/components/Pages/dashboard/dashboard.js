import './dashboard.css'
import LoadUser from "../../../Functions/LoadUser";

function Dashboard() {
    LoadUser();
    return (
        <div className = "dashboard-page">
            <div className = "dashboard-main">
                <div className = "dashboard-nav-div">
                    <nav className = "dashboard-nav">
                        <div className = "dashboard-nav-flex">
                            <div className = "dashboard-user-icon-div">
                                <img className = "user-icons" id = "user-icon" src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt = "usericon"></img>
                            </div>
                            <div className = "dashboard-user-name-div">
                                <p className = "user-names" id = "user-name">User</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;