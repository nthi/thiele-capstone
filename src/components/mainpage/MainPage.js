//This module will render main page display components (inside classed divs for styling purposes).
//TO DO: for stretch goals, add toggle-button elements to opt-in/out of certain categories
//TO DO: for stretch goals, add custom-submission-form where user can add a link that will automatically appear in their plan or add it to the activity table to be included in the future.
//this will be parent of EmbedManager.js, needs to set state and create props

import { DisplayPlan } from "./DisplayPlan"
import { RandomPlan } from "./RandomPlan"
import { useNavigate } from "react-router-dom"
import "./mainpage.css"
import YoutubeEmbed from "../embedvideo/YoutubeEmbed"


export const MainPage = () => {
    const navigate = useNavigate()

    return (<>

        <div className="displayPlanRow">
        <DisplayPlan />
        </div>

        <div className="customAct">
        <h2>How about adding a custom activity?</h2>
        <button           
            onClick={() => {navigate("/activities")}}
            className="greenButton">
            Add a Custom Activity
        </button>
        </div>

        {/* <div className="embedYT">
            <h4>Watch YouTube Links Here:</h4>
            <YoutubeEmbed embedId="KV8Hj_E8LJc"/>
        </div> */}
    </>
    )
}

