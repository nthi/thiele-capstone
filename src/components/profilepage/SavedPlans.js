//this component will display list of all plans that user "saves". Will include notes form.
//question: is there a way to call the activities array to state once for the entire app so that it's not happening once per place that plans are displayed?

import { useEffect, useState } from "react"
import { Plan } from "./Plan"

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
//make this into its own component that I can put into multiple places
//weird situation: this works sometimes and gives me an error about can't read properties of undefined (reading 'activityName') about every other time.
//broke each time after trying to transfer the code over into LoggedPlans to change it up and use there.
//I swear profile page view was gone then reloaded itself **WHILE** I was writing this commentary. utterly lost.

//Is it mad about the fetches? if so, what is the fix?
