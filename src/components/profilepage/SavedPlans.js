//This module displays list of all plans that user saves from MainPage random generator.


import { useEffect, useState } from "react"
import { Plan } from "./Plan"
import "./profilepage.css"

export const SavedPlans = ({allPlans, allActivities, updateAllPlans, wswdObject, linkClick, setLinkClick}) => {
    const [plans, setPlans] = useState([])
    const [activities, setActivities] = useState([])



    useEffect(() => {
        const viewPlan = allPlans.filter(plan => plan.isLogged === false)
        setPlans(viewPlan)

    },[allPlans])


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
                    wswdObject={wswdObject}
                    linkClick={linkClick}
                    setLinkClick={setLinkClick}/>

                )
            }
            </div>
        </section>
         </>
    )
}
