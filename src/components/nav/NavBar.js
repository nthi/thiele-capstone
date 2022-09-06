//Creates a nav bar with logo and links for Main page, Profile page, and Logout function.
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className="navbar">

        <img src="longLogo.jpg" className="logo" alt="Logo featuring line art: charcoal background, light-blue generic human figure holding line art rainbow overhead. Text: What Should We Do Today?" />
        <ul className="links">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/main">Main</Link>
            </li>

            <li className="navbar__item active">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>
            

            {
                localStorage.getItem("wswd_user")
                ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("wswd_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
                }
        </ul>
        </div>
        </>
    )
}