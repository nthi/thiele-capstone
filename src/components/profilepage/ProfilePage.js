//This module renders the LoggedPlans, SavedPlans, and UserProfileCard components.

import { useEffect, useState } from "react"
import { LoggedPlans } from "./LoggedPlans"
import { SavedPlans } from "./SavedPlans"
import { UserProfileCard } from "./UserProfileCard"
import "./profilepage.css"
import YoutubeEmbed from "../embedvideo/YoutubeEmbed"

export const ProfilePage = () => {

    const [allPlans, updateAllPlans] = useState([])
    //I'll send allPlans and allActivites, use updateAllPlans in saved plans after PUT
    const [allActivities, updateAllActivities] = useState([])

    //needs a useState for holding the second half of clicked, split YouTube link
    const [linkClick, setLinkClick] = useState("")

    const localWSWDUser = localStorage.getItem("wswd_user")
    const wswdObject = JSON.parse(localWSWDUser)

    useEffect(() => {
        fetch(`http://localhost:8088/userActivityBridge?userId=${wswdObject.id}`)
        .then((response) => response.json())
        .then((planArray) => {
            updateAllPlans(planArray)
        })
        fetch(`http://localhost:8088/activities`)
        .then((response) => response.json())
        .then((activityArray) => {
            updateAllActivities(activityArray)
        })
    },[])



    return (<>
        <div className="profileStyle">

            <div className="loggedColumn">
            <h2>Logged Plans</h2>
            <LoggedPlans allPlans={allPlans}
            allActivities={allActivities}
            wswdObject={wswdObject}
            linkClick={linkClick}
            setLinkClick={setLinkClick}
            />
            </div>

            <div className="savedColumn">
            <h2>Saved Plans</h2>
            <SavedPlans allPlans={allPlans}
            allActivities={allActivities}
            updateAllPlans={updateAllPlans}
            wswdObject={wswdObject}
            linkClick={linkClick}
            setLinkClick={setLinkClick}
            />
            </div>

            <div className="profileColumn">
            <h2>User Information</h2>
            <UserProfileCard />
            </div>
            
        </div>

        <div id="profileEmbed">
        <YoutubeEmbed 
        linkClick={linkClick} />
        </div>
    </>
    )
}