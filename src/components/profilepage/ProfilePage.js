import { useEffect, useState } from "react"
import { LoggedPlans } from "./LoggedPlans"
import { SavedPlans } from "./SavedPlans"
import { UserProfileCard } from "./UserProfileCard"

export const ProfilePage = () => {

    const [allPlans, updateAllPlans] = useState([])
    //I'll send allPlans and allActivites, use updateAllPlans in saved plans after PUT
    const [allActivities, updateAllActivities] = useState([])

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
        <div className="loggedColumn">
        <LoggedPlans allPlans={allPlans}
        allActivities={allActivities}
        wswdObject={wswdObject}
        />
        </div>

        <div className="savedColumn">
        <SavedPlans allPlans={allPlans}
        allActivities={allActivities}
        updateAllPlans={updateAllPlans}
        wswdObject={wswdObject}
        />
        </div>

        <div className="profileColumn">
        <UserProfileCard />
        </div>
    </>
    )
}