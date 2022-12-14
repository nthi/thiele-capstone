//This module creates a registration form for new users. Includes a fetch() to POST new users to the database and a a fetch() to check whether an email already exists.

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Register = (props) => {
    const [user, setUser] = useState({
        email: "",
        fullName: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("wswd_user", JSON.stringify({
                        id: createdUser.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8088/users?email=${user.email}`)
    .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for What Should We Do Today</h1>
                <fieldset>
                    <label className="nameLine" htmlFor="fullName"> Full Name </label>
                    <input onChange={updateUser}
                           type="text" id="fullName" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label className="emailLine" htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <button className="brightGreenButton" type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

