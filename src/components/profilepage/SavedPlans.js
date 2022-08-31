//this component will display list of all plans that user "saves". Will include notes form.


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

    //set state for all activity bridge in profile page, then get that state in useEffect (can also do fetch activities in profile page), then use a .filter to get isLogged true or false



    return (
        <>
        <section className="savedPlans__list">

            <div className="savedStyle">
            {
                plans.map(
                    (plan) =>
                    <Plan key={`logged--${plan.id}`}
                    activities={allActivities} 
                    plan={plan}
                    updateAllPlans={updateAllPlans}
                    wswdObject={wswdObject}/>
                )
            }
            </div>
        </section>
         </>
    )
}
