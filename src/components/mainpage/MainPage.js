//This module will render main page display components (inside classed divs for styling purposes).
//TO DO: for stretch goals, add toggle-button elements to opt-in/out of certain categories
//TO DO: for stretch goals, add custom-submission-form where user can add a link that will automatically appear in their plan or add it to the activity table to be included in the future.

import { DisplayPlan } from "./DisplayPlan"
import { RandomPlan } from "./RandomPlan"

export const MainPage = () => {
    return (<>
        <h2>hey y'all</h2>

        <div className="displayPlanRow">
        <DisplayPlan />
        </div>

        {/* <div>
            <RandomPlan />
        </div> */}

    </>
    )
}