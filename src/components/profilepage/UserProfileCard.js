import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./profilepage.css"


export const UserProfileCard = () => {
    //I pulled this from honeyraes but I don't think i need useParams... do I need user/updateUser/useState? I think so?
    //and I think I need useState with a {} to indicate I'm dealing with an object?
    // const {userId} = useParams()
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