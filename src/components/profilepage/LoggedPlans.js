//once a saved plan has notes added to it and saved, it becomes logged and then displayed here
import { useEffect, useState } from "react"

export const LoggedPlans = () => {
    const [plans, setPlans] = useState([])
    const [activities, setActivities] = useState([])

    const localWSWDUser = localStorage.getItem("wswd_user")
    const wswdObject = JSON.parse(localWSWDUser)

    useEffect(() => {
        fetch(`http://localhost:8088/userActivityBridge?isLogged=true&userId=${wswdObject.id}`)
        .then((response) => response.json())
        .then((loggedArray) => {
            setPlans(loggedArray)
        })
        fetch(`http://localhost:8088/activities`)
        .then((response) => response.json())
        .then((activityArray) => {
            setActivities(activityArray)
        })
    },[])




    return (
        <>
        <section className="loggedPlans__list">
            <h2>Logged Plans</h2>
            {
                plans.map(
                    (plan) =>
                    <Plan plans={plans}
                    activities={activities}
                    planObject={plan}/>
                    // <div className="logged__item" key={plan.id}>
                    //     <p>Activity One: {activities.find(x=> x.id === plan.activityOneId)?.activityName} </p>
                    //     <p>Details: {activities.find(x=> x.id === plan.activityOneId)?.activityDescription}</p>

                    //     <p>Activity Two: {activities.find(x=> x.id === plan.activityTwoId)?.activityName}</p>
                    //     <p>Details: {activities.find(x=> x.id === plan.activityTwoId)?.activityDescription}</p>

                    //     <p>Activity Three: {activities.find(x=> x.id === plan.activityThreeId)?.activityName}</p>
                    //     <p>Details: {activities.find(x=> x.id === plan.activityThreeId)?.activityDescription}</p>
                    // </div>
                )
            }
        </section>
        </>
    )
}

//inside map, make variable for a1, 2, 3 before return, do the .find, then run that for each entry a1.name, a2.etc