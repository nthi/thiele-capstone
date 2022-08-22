//this component will display list of all plans that user "saves". Will include notes form.

import { useEffect, useState } from "react"

export const SavedPlans = () => {
    const [plans, setPlans] = useState([])

    const localWSWDUser = localStorage.getItem("wswd_user")
    const wswdObject = JSON.parse(localWSWDUser)

    useEffect(() => {
        fetch('http://localhost:8088/userActivityBridge?isLogged=false&userId=${wswdObject.id}')
        .then((response) => response.json())
        .then((savedArray) => {
            setPlans(savedArray)
        })
    },[])

    return (
        <>
        <section className="saved__list">
            {
                plans.map(plan => {
                    return <>
                    <div className="saved__item">
                        <h4></h4>
                    </div>
                    </>
                })
            }
        </section>
        </>
    )
}