//once a saved plan has notes added to it and saved, it becomes logged and then displayed here
import { useEffect, useState } from "react"
import { Plan } from "./Plan"


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
                    <Plan key={`logged--${plan.id}`}
                    activities={activities} 
                    plan={plan}/>
                )
            }
        </section>
        </>
    )
}

//inside map, make variable for a1, 2, 3 before return, do the .find, then run that for each entry a1.name, a2.etc