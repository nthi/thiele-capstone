//This module generates random plans when the "generate" button is clicked and POSTS the most current plan onscreen to the database when the "save" button is clicked.
//When a YouTube link is clicked in the plan on display, an onClick function splits and captures part of the URL and sets it to linkClick state. LinkClick is passed as a prop to YoutubeEmbed.js, which uses it as the end/subdirectory of the "src" URL (completing the YoutubeEmbed component and allowing embedded YT video to display at the bottom of the screen view).

import { useState } from "react"
import { RandomPlan } from "./RandomPlan"
import "./mainpage.css"
import { useNavigate } from "react-router-dom"
import { EmbedManager } from "../embedvideo/EmbedManager"
import YoutubeEmbed from "../embedvideo/YoutubeEmbed"

export const DisplayPlan = () => {

    //needs a useState just for holding the random plan
    const [tacoPlan, updateRandomPlans] = useState([])
    //needs a useState for holding the second half of the clicked, split YouTube link
    const [linkClick, setLinkClick] = useState("")

    const navigate = useNavigate()
    //this logic pulled from an app with a form and we're using values from targets on the form. is this applicable in this component?
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
                            <>
                            <div className="plan__item">
        
                            <p>Activity: {plan.activityName} </p>
                            <p>Details: {plan.activityDescription}</p>
                            <div>
                                {
                                    plan.link.includes("youtube")
                                    ? <a href="#embed"><button className="yellowButton"
                                    onClick={() => {
                                        
                                            let embedIdObject =  plan.link.split("?v=")
                                            setLinkClick(embedIdObject[1])
                                        
                                       
                                    }} >Click the Button!</button></a>
                                    : plan.link && plan.link.length > 0 ?<a href={plan.link} target="_blank">Click the Link!</a>
                                    : ""
                                }
                            </div>
        
                            </div>
                            </>
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

        <div className="customAct">
        <h2>How about adding a custom activity?</h2>
        <button           
            onClick={() => {navigate("/activities")}}
            className="greenButton">
            Add a Custom Activity
        </button>
        </div>
        
        <div id="embed">
        <YoutubeEmbed 
        linkClick={linkClick} />
        </div>


        </>

    )

}



//href={plan.link} target="_blank"


//conditional that figures out if it's link or youtube