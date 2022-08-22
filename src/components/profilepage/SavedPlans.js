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




    return (
        <>
        <section className="savedPlans__list">
            <h2>Saved Plans</h2>
            {
                plans.map(plan => {
                    return <>
                    <div className="saved__item">
                        <p>Activity One: {activities.find(x=> x.id === plan.activityOneId).activityName} </p>
                        <p>Details: {activities.find(x=> x.id === plan.activityOneId).activityDescription}</p>

                        <p>Activity Two: {activities.find(x=> x.id === plan.activityTwoId).activityName}</p>
                        <p>Details: {activities.find(x=> x.id === plan.activityTwoId).activityDescription}</p>

                        <p>Activity Three: {activities.find(x=> x.id === plan.activityThreeId).activityName}</p>
                        <p>Details: {activities.find(x=> x.id === plan.activityThreeId).activityDescription}</p>
                    </div>
                    </>
                })
            }
        </section>
        </>
    )
}

//weird situation: this works sometimes and gives me an error about undefined activityName about every other time.