//This module displays logged plans with notes and date/time stamps.

import { useEffect, useState } from "react"
import { Plan } from "./Plan"
import "./profilepage.css"


export const LoggedPlans = ({allPlans, allActivities, wswdObject, linkClick, setLinkClick}) => {
    const [plans, setPlans] = useState([])
    const [activities, setActivities] = useState([])



    useEffect(() => {
        console.log("this is all plans", allPlans)
        const viewPlan = allPlans.filter(plan => {
            console.log("this is a plan in the filter", plan)
            console.log("this is the bool",  plan.isLogged === true)
            return plan.isLogged === true
        })
        console.log(viewPlan)
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

