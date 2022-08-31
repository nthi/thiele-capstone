//This module will render main page display components (inside classed divs for styling purposes).
//TO DO: for stretch goals, add toggle-button elements to opt-in/out of certain categories

//this will be parent of EmbedManager.js, needs to either hold state and create props or pass them down.
//I think that information that EmbedManager needs actually comes from DisplayPlan. Does that mean DisplayPlan is parent, this is child, and EmbedManager is grandchild?

import { DisplayPlan } from "./DisplayPlan"
import { useNavigate } from "react-router-dom"
import "./mainpage.css"
//import YoutubeEmbed from "../embedvideo/YoutubeEmbed"


export const MainPage = () => {
    const navigate = useNavigate()

    return (<>

        <div className="displayPlanRow">
        <DisplayPlan />
        </div>

    </>
    )
}

