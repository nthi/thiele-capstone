//this module generates the plan display for multiple components in the app.
//is this where I generate button and form logic? or is that better left to the components in question.
//TO DO: I'll need a DELETE button if logged plan
//a DELETE button for saved plans
//an add-notes form/save-and-log button for saved plans to PUT changes to the bridge table in "note" key

import { useState } from "react"

//when form is edited and/or saved-and-logged, page display should refresh immediately and the saved plan which was logged will now appear with notes and a timestamp in the logged display.
export const Plan = ({plan, activities, updateAllPlans, wswdObject}) => {



    const [planNote, updatePlanNote] = useState({
        date: "",
        note: "",
        isLogged: ""
    })

    const saveAndLogPlan = (event) => {
        const copy = {
            //add rest of stuff here
            id: plan.id,
            userId: plan.userId,
            activityOneId: plan.activityOneId,
            activityTwoId: plan.activityTwoId,
            activityThreeId: plan.activityThreeId,
            date: new Date(),
            note: planNote.note,
            isLogged: true
        }
        fetch(`http://localhost:8088/userActivityBridge/${plan.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(copy)
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/userActivityBridge?userId=${wswdObject.id}`)
                .then((response) => response.json())
                .then((planArray) => {
                    updateAllPlans(planArray)
                })
            })
    }
    //I think I need to refresh the page immediately with saveAndLogPlan button click. goes in that last .then? In HoneyRae's, I think this was "getAllTickets() which was deconstructed in what would be this component's function notation at the top ({})"
    //    const [plansToDisplay, updatePlansToDisplay] = useState([])
    // and somewhere a .then(plansArray => updatePlansToDisplay(plansArray))

    const deletePlan = (event) => {
        fetch(`http://localhost:8088/userActivityBridge/${plan.id}`, {
                    method: "DELETE"
                })
            .then(() => {
                updateAllPlans()
            })
    }
    //clair, ten minutes yoga, short trip outside DID delete, then page blinked to solid yellow/blank/no plans, then refresh made it come back without the plan I deleted.

    let actOne = activities.find(x=> x.id === plan.activityOneId)
    let actTwo = activities.find(x=> x.id === plan.activityTwoId)
    let actThree = activities.find(x=> x.id === plan.activityThreeId)

    return (
        
        <div className="plan__item" key={plan.id}>
            <p>Activity One: {actOne?.activityName} </p>
            <p>Details: {actOne?.activityDescription}</p>

            <p>Activity Two: {actTwo?.activityName}</p>
            <p>Details: {actTwo?.activityDescription}</p>

            <p>Activity Three: {actThree?.activityName}</p>
            <p>Details: {actThree?.activityDescription}</p>

            <div>
            {
                plan.date
                ? `Date: ${plan.date}`
                : ""
            }
            </div>

            <div>
            {
                plan.note
                ? `Note: ${plan.note}`
                : ""
            }
            </div>

            <div>
                {
                    !plan.isLogged
                    ? <> 
                    <fieldset>
                    <div className="form-group">
                    <label htmlFor="contents"></label>
                        <textarea name="notes"
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Add notes..."
                            value={planNote.note}
                            onChange={
                                (evt) => {
                                    const copy = { ...planNote }
                                    copy.note = evt.target.value
                                    updatePlanNote(copy)
                                }
                            } />
                    </div>
                    </fieldset>
                    <button onClick={(clickEvent) => saveAndLogPlan(clickEvent)} className="btn btn-primary">
                    Submit Note and Log Plan
                    </button>
                     </>
                : ""
                }
            </div>
            <div>
                {
                    !plan.isLogged
                    ? <> 
                    <button onClick={(clickEvent) => deletePlan(clickEvent)} className="btn btn-primary">
                    Not a Fan? Delete this Plan!
                    </button>
                     </>
                : ""
                }
            </div>
            
        </div>
    )
}