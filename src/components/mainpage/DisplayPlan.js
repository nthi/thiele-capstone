//this module will probably create just the three-activity plan display? Not sure if "generate new plan" and "save plan" buttons go here or not. I think I call them here but I'm not sure if I create them here.

import { useState } from "react"
import { RandomPlan } from "./RandomPlan"
import "./mainpage.css"
import { useNavigate } from "react-router-dom"

export const DisplayPlan = () => {

    //needs a useState just for holding the random plan
    const [tacoPlan, updateRandomPlans] = useState([])

    const navigate = useNavigate()
    //this logic pulled from an app with  a form and we're using values from targets on the form. is this applicable in this component?
    const [newPlan, saveNewPlan] = useState({
        
        userId: 0,
        activityOneId: 0,
        activityTwoId: 0,
        activityThreeId: 0,
        date: "",
        note: "",
        isLogged: 0
    })

    const localWSWDUser = localStorage.getItem("wswd_user")
    const wswdObject = JSON.parse(localWSWDUser)

    //note: this random function generator gets mad after a couple of sequential clicks. Will work a few times in a row, but sometimes stall out and only work again if you refresh, save a plan then navigate back to main and generate plan again, or save plan, nav back, then refresh.
    const generatePlanButtonClick = (event) => {
        event.preventDefault()

        //this function contains a fetch call, which is why we need a .then when we call it here.
        //RandomPlan fetches the activities table and ultimately returns a random three-plan-activity. This puts that random plan in state so we can display it and potentially save/POST it to the bridge table.
        RandomPlan()
       .then(updateRandomPlans)

    }

    //to post a saved plan obj to the bridge table
    //where will I be pulling the activityOne/two/three values?
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

            const planToSendToAPI = {
                userId: wswdObject.id,
                activityOneId: tacoPlan[0].id,
                activityTwoId: tacoPlan[1].id,
                activityThreeId: tacoPlan[2].id,
                date: "",
                note: "",
                isLogged: false
            }

        
        fetch(`http://localhost:8088/userActivityBridge`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(planToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/profile")
            })
    }


    return (
        <>
        <div className="main">
        <h2>Would you like to create a random activity plan?</h2>
        <button 
            onClick={(clickEvent) => generatePlanButtonClick(clickEvent)}
            className="blueButton">
            Generate Plan
        </button>

        <h4>Try This!</h4>
        
        <div>
            {
                tacoPlan
                ? <section className="displayPlan">
                    <div>
                    {
                        tacoPlan.map(plan => 
                            <div className="plan__item">
        
                            <p>Activity: {plan.activityName} </p>
                            <p>Details: {plan.activityDescription}</p>
        
        
                            </div>
                        
                        )
                    }
                    </div>
                    </section>
                : ""
            }

        </div>
        
        <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="purpleButton">
            Save Plan
        </button>
        </div>
        </>
    )

}

