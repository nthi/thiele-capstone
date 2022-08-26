//once a saved plan has notes added to it and saved, it becomes logged and then displayed here
import { useEffect, useState } from "react"
import { Plan } from "./Plan"
import "./profilepage.css"


export const LoggedPlans = ({allPlans, allActivities, wswdObject}) => {
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
    //I need to also add logic to sort these chronologically.




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
                    wswdObject={wswdObject}/>
                )
            }
            </div>
        </section>
        </>
    )
}

//inside map, make variable for a1, 2, 3 before return, do the .find, then run that for each entry a1.name, a2.etc