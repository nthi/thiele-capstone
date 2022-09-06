//This module generates the plan display for multiple components in the app.
//Includes on-page form for adding notes to plans, log button, and delete button for saved plans user no longer wants.
//If "submit note and log plan" is clicked, the plan object is updated with a fetch() PUT to include new Date(), optional note, and isLogged: true.
import { useState } from "react"

export const Plan = ({plan, activities, updateAllPlans, wswdObject, linkClick, setLinkClick}) => {



    const [planNote, updatePlanNote] = useState({
        date: "",
        note: "",
        isLogged: ""
    })

    const saveAndLogPlan = (event) => {
        const copy = {
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

    const deletePlan = (event) => {
        fetch(`http://localhost:8088/userActivityBridge/${plan.id}`, {
                    method: "DELETE"
                })
                .then(() => {
                    fetch(`http://localhost:8088/userActivityBridge?userId=${wswdObject.id}`)
                    .then((response) => response.json())
                    .then((planArray) => {
                        updateAllPlans(planArray)
                    })
                })
    }

    let actOne = activities.find(x=> x.id === plan.activityOneId)
    let actTwo = activities.find(x=> x.id === plan.activityTwoId)
    let actThree = activities.find(x=> x.id === plan.activityThreeId)
  

    return (
        <>
        
        <div className="plan__item" key={plan.id}>
            <div className="minicard">
            <p>Activity One: {actOne?.activityName} </p>
            <p>Details: {actOne?.activityDescription}</p>
            <div>
                {
                    actOne?.link.includes("youtube")
                    ? <a href="#profileEmbed"><button className="yellowButton" onClick={() => {
                                        
                        let embedIdObject =  actOne.link.split("?v=")
                        setLinkClick(embedIdObject[1])
                    
                   
                }} >Click the Button!</button></a>
                    : actOne?.link && actOne?.link.length > 0 
                    ? <a href={actOne?.link} target="_blank">Click the Link!</a>
                    : ""
                }
            </div>
            </div>
            
            <div className="minicard">
            <p>Activity Two: {actTwo?.activityName}</p>
            <p>Details: {actTwo?.activityDescription}</p>
            <div>
                {
                    actTwo?.link.includes("youtube")
                    ? <a href="#profileEmbed"><button className="yellowButton" onClick={() => {
                                        
                        let embedIdObject =  actTwo.link.split("?v=")
                        setLinkClick(embedIdObject[1])
                    
                   
                }} >Click the Button!</button></a>
                    : actTwo?.link && actTwo?.link.length > 0 
                    ? <a href={actTwo?.link} target="_blank">Click the Link!</a>
                    : ""
                }
            </div>
            </div>
            
            <div className="minicard">
            <p>Activity Three: {actThree?.activityName}</p>
            <p>Details: {actThree?.activityDescription}</p>
            <div>
                {
                    actThree?.link.includes("youtube")
                    ? <a href="#profileEmbed"><button className="yellowButton" onClick={() => {
                                        
                        let embedIdObject =  actThree.link.split("?v=")
                        setLinkClick(embedIdObject[1])
                    
                   
                }} >Click the Button!</button></a>
                    : actThree?.link && actThree?.link.length > 0 
                    ? <a href={actThree?.link} target="_blank">Click the Link!</a>
                    : ""
                }
            </div>
            </div>

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
                    <button onClick={(clickEvent) => saveAndLogPlan(clickEvent)} className="indigoButton">
                    Submit Note and Log Plan
                    </button>
                     </>
                : ""
                }
            </div>
            <br></br>
            <div>
                {
                    !plan.isLogged
                    ? <> 
                    <button onClick={(clickEvent) => deletePlan(clickEvent)} className="redButton">
                    Not a Fan? Delete this Plan!
                    </button>
                     </>
                : ""
                }
            </div>
            
        </div>
        <hr className="dashline" />
        </>
    )
}