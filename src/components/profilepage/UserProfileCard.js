//This module creates the User Profile info section on the Profile page.

import { useEffect, useState } from "react"
import "./profilepage.css"


export const UserProfileCard = () => {

    const [user, updateUser] = useState({})


    const localWSWDUser = localStorage.getItem("wswd_user")
    const wswdObject = JSON.parse(localWSWDUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?id=${wswdObject.id}`)
            .then(response => response.json())
            .then((data) => {
                const singleUser = data[0]
                updateUser(singleUser)
            })
        },
        []
    )

    return <>
    <div className="userStyle">

    <section className="user">
        <header className="user__header">
            {user.fullName}
        </header>
        <div>Email: {user.email}</div>
    </section>
    </div>
    </>
}