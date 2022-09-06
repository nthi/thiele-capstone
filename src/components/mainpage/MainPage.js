//This module will render main page display components (inside classed divs for styling purposes).
//STILL LEFT TO DO: for stretch goals, add toggle-button elements to opt-in/out of certain categories


import { DisplayPlan } from "./DisplayPlan"
import "./mainpage.css"


export const MainPage = () => {


    return (<>

        <div className="displayPlanRow">
        <DisplayPlan />
        </div>

    </>
    )
}

