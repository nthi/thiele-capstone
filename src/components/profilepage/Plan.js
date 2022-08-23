//this module generates the plan display for multiple components in the app.
//is this where I generate button and form logic? or is that better left to the components in question.
//TO DO: I'll need a DELETE button if logged plan
//a DELETE button for saved plans
//an add-notes form/save-and-log button for saved plans to PUT changes to the bridge table in "note" key

import { useState } from "react"

//when form is edited and/or saved-and-logged, page display should refresh immediately and the saved plan which was logged will now appear with notes and a timestamp in the logged display.
export const Plan = ({plan, activities}) => {

    const [planNote, updatePlanNote] = useState({
        date: "",
        note: "",
        isLogged: ""
    })

    const updatePlan = () => {
        const copy = {
            date: new Date(),
            note: planNote.note,
            isLogged: true
        }
        fetch(`http://localhost:8088/userActivityBridge?isLogged=false&userId=${wswdObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(copy)
        })
            .then(response => response.json())
    }


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
                    !plan.isLogged
                    ? <fieldset>
                    <div className="form-group">
                    <label htmlFor="contents"></label>
                        <input
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
                : ""
                }
            </div>
            
        </div>
    )
}