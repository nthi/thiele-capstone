//this module will probably create just the three-activity plan display? Not sure if "generate new plan" and "save plan" buttons go here or not. I think I call them here but I'm not sure if I create them here.

import { useState } from "react"
import { RandomPlan } from "./RandomPlan"

export const DisplayPlan = () => {

    //new useState just for holding the random plan
    const [randomPlans, updateRandomPlans] = useState([])

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

    const generatePlanButtonClick = (event) => {
        event.preventDefault()

        //see what happens in console. Not simply running the RandomPlan and returning the array. Should I move randomplan logic here? If not, what kind of state am I passing between randomplan and here?
        let plans = RandomPlan()
        console.log(plans)
        updateRandomPlans(plans)
    }

    //to post a saved plan obj to the bridge table
    //where will I be pulling the activityOne/two/three values?
    // const handleSaveButtonClick = (event) => {
    //     event.preventDefault()

    //         const planToSendToAPI = {
    //             userId: wswdObject.id,
    //             activityOneId: ,
    //             activityTwoId: ,
    //             activityThreeId: ,
    //             date: "",
    //             note: "",
    //             isLogged: false
    //         }

        
    //     fetch(`http://localhost:8088/userActivityBridge`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(ticketToSendToAPI)
    //     })
    //         .then(response => response.json())
    //         .then(() => {})
    // }


    return (
        <>
        <button 
            onClick={(clickEvent) => generatePlanButtonClick(clickEvent)}
            className="btn btn-primary">
            Generate Plan
        </button>
        
        <div>
            {
                randomPlans
                ? <section className="displayPlan">
                    <h2>Try This!</h2>
                    <div>
                    {
                        randomPlans.map(plan => {
                            <div className="plan__item" key={plan.id}>
        
                            <p>Activity: {plan.activityName} </p>
                            <p>Details: {plan.activityDescription}</p>
        
        
                            </div>
                        }
                    
                        )
                    }
                    </div>
                    </section>
                : ""
            }

        </div>
        

        </>
    )

}


//this is still unhappy about displaying the mapped plans situation. whether or not the "Try This" prints seems to be based on randomplans[]or not.
//error in console: randomPlans.map is not a function

//notes for myself
//pass state between two components
//either have parent/child relationship and pass state up or down as props
//siblings, state in whatever closest parent ... this is like TicketContainer in honeyraes