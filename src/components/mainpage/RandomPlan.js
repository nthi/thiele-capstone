//this module needs to pull three random activities from the activities table.
//none of the three should repeat the same activityTypeId.


export const RandomPlan = () => {




        return fetch(`http://localhost:8088/activities`)
        .then((response) => response.json())
        .then((activities) => {
        


    let randomOne
    let randomTwo
    let randomThree

    randomOne = activities[Math.floor(Math.random() * activities.length)]
    
    randomTwo = activities.filter(activity => activity.activityTypeId !== randomOne.activityTypeId)[Math.floor(Math.random() * activities.length)]

    randomThree = activities.filter(activity => activity.activityTypeId !== (randomTwo.activityTypeId || randomOne.activityTypeId))[Math.floor(Math.random() * activities.length)]

    let tentativePlan = [randomOne, randomTwo, randomThree]

    console.log(tentativePlan)

    return tentativePlan 
        })
}

//what if I return the "generate plan" button and the plan for display in this component then call the component in the return display in DisplayPlan?js? Then the display there is only responsible for the save button display and click event.