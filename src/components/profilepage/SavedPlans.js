//this component will display list of all plans that user "saves". Will include notes form.
//question: is there a way to call the activities array to state once for the entire app so that it's not happening once per place that plans are displayed?

import { useEffect, useState } from "react"
import { Plan } from "./Plan"
import "./profilepage.css"

export const SavedPlans = ({allPlans, allActivities, updateAllPlans, wswdObject}) => {
    const [plans, setPlans] = useState([])
    const [activities, setActivities] = useState([])



    useEffect(() => {
        const viewPlan = allPlans.filter(plan => plan.isLogged === false)
        setPlans(viewPlan)

    },[allPlans])

    //set state for all activy bridge in profile page, then get that state in useEffect (can also do fetch activities in profile page), then use a .filter to get isLogged true or false

//over lunch, think about if it has a note/date, then they need to be added to loggedPlans and that state re-pulled from database so it's up to date
//conditional, also some kind of setState situation


    return (
        <>
        <section className="savedPlans__list">
            <h2>Saved Plans</h2>
            {
                plans.map(
                    (plan) =>
                    <Plan key={`logged--${plan.id}`}
                    activities={allActivities} 
                    plan={plan}
                    updateAllPlans={updateAllPlans}/>
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
