//this component will display list of all plans that user "saves". Will include notes form.

import { useEffect, useState } from "react"

export const SavedPlans = () => {
    const [plans, setPlans] = useState([])
    const [activities, setActivities] = useState([])

    const localWSWDUser = localStorage.getItem("wswd_user")
    const wswdObject = JSON.parse(localWSWDUser)

    useEffect(() => {
        fetch(`http://localhost:8088/userActivityBridge?isLogged=false&userId=${wswdObject.id}`)
        .then((response) => response.json())
        .then((planArray) => {
            setPlans(planArray)
        })
        fetch(`http://localhost:8088/activities`)
        .then((response) => response.json())
        .then((activityArray) => {
            setActivities(activityArray)
        })
    },[])

    const activityOneMatch = (plan) => {
        activities.find(activity => plan.activityOneId === activity.id)
    }


    return (
        <>
        <section className="saved__list">
            <h2>Saved Plans</h2>
            {
                plans.map(plan => {
                    return <>
                    <div className="saved__item">
                        <p>Activity One: </p>
                        <p></p>
                        <p>Activity Two: </p>
                        <p>Activity Three: </p>
                    </div>
                    </>
                })
            }
        </section>
        </>
    )
}