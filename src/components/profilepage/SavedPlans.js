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
    },[])

    useEffect(() => {
        fetch(`http://localhost:8088/activities`)
        .then((response) => response.json())
        .then((activityArray) => {
            setActivities(activityArray)
        })
    },[])
    
// or get the activity table array below, use a .find
    return (
        <>
        <section className="saved__list">
            {
                plans.map(plan => {
                    return <>
                    <div className="saved__item">
                        <h4>Plan</h4>
                        <p>Activity One: {activities.find(activity => {
                            if (activity.id === plan.activityOneId) {
                                return ( <>
                                    <p>
                                    activity.activityName
                                    </p>
                                </>
                                )
                            }
                        })}</p>
                        <p>Activity Two: {}</p>
                        <p>Activity Three: {}</p>
                    </div>
                    </>
                })
            }
        </section>
        </>
    )
}