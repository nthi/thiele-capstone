import { useState } from "react"
import { useNavigate } from "react-router-dom"
import  Form  from "react-bootstrap/Form"
import "./activitiesform.css"

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
        <form className="activityForm">
            <h2 className="form__title">Add a Custom Activity to the Database</h2>
            <Form.Group>
                    <Form.Label htmlFor="name">Activity Name:</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Name your activity"
                        value={activity.activityName}
                        onChange={
                            (evt) => {
                                const copy = {...activity}
                                copy.activityName = evt.target.value
                                update(copy)
                            }
                        } />
            </Form.Group>
            <Form.Group>
                    <Form.Label htmlFor="description">Add a Description, Instructions, and/or Weblinks:</Form.Label>
                    <Form.Control 
                        as="textarea"
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
            </Form.Group>
            <Form.Group>
                    <label htmlFor="type">Activity Type:</label>
                    <Form.Select size="lg" value={activity.activityTypeId}
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
                        <option value="4">4 - Writing or Discussion</option>
                        <option value="5">5 - Movement Break</option>
                        <option value="6">6 - Wild Card</option>
                    </Form.Select>

            </Form.Group>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Activity
            </button>
        </form>
    )
}