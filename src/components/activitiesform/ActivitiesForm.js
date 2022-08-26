import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ActivityForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [activity, update] = useState({
        activityTypeId: 0,
        activityName: "",
        activityDescription: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()

   const localWSWDUser = localStorage.getItem("wswd_user")
   const wswdObject = JSON.parse(localWSWDUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

            const activityToSendToAPI = {
                activityTypeId: activity.activityTypeId,
                activityName: activity.activityName,
                activityDescription: activity.activityDescription
            }

        // TODO: Perform the fetch() to POST the object to the API
        fetch(`http://localhost:8088/activities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(activityToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/main")
            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Add a Custom Activity to the Database</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Activity Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name your activity"
                        value={activity.activityName}
                        onChange={
                            (evt) => {
                                const copy = {...activity}
                                copy.activityName = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Add a Description, Instructions, and/or Weblinks:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of activity"
                        value={activity.activityDescription}
                        onChange={
                            (evt) => {
                                const copy = {...activity}
                                copy.activityDescription = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Activity Type:</label>
                    <select className="form-control" value={activity.activityTypeId}
                        onChange={
                            (evt) => {
                                const copy = {...activity}
                                copy.activityTypeId = evt.target.value
                                update(copy)
                            }
                        }>
                        <option value="0">Please choose an option</option>
                        <option value="1">1 - Music</option>
                        <option value="2">2 - Poetry</option>
                        <option value="3">3 - Art</option>
                        <option value="4">4 - Language and Writing</option>
                        <option value="5">5 - Movement Break</option>
                        <option value="6">6 - Wild Card</option>

                    </select>

                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}