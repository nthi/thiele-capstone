//This module displays logged plans with notes and date/time stamps.

import { useEffect, useState } from "react"
import { Plan } from "./Plan"
import "./profilepage.css"


export const LoggedPlans = ({allPlans, allActivities, wswdObject, linkClick, setLinkClick}) => {
    const [plans, setPlans] = useState([])
    const [activities, setActivities] = useState([])



    useEffect(() => {
        const viewPlan = allPlans.filter(plan => plan.isLogged === true
        )
        setPlans(viewPlan)
    },[allPlans])




    return (
        <>
        <section className="loggedPlans__list">

            <div className="loggedStyle">
            {
                plans.map(
                    (plan) =>
                    <Plan key={`logged--${plan.id}`}
                    activities={allActivities} 
                    plan={plan}
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

