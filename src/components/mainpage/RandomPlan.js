//this module needs to pull three random activities from the activities table.
//none of the three should repeat the same activityTypeId.
//An interesting puzzle for another day: exactly once, all three activities have been poetry. Not sure how that happened. Check here and also DisplayPlan.js.


export const RandomPlan = () => {

let thing = []


    return fetch(`http://localhost:8088/activities`)
        .then((response) => response.json())
        .then((activities) => {
        


    let randomOne
    let randomTwo
    let randomThree

    randomOne = activities[Math.floor(Math.random() * activities.length)]
    
    randomTwo = activities.filter(activity => activity.activityTypeId !== randomOne.activityTypeId)

    randomTwo = randomTwo[Math.floor(Math.random() * randomTwo.length)]

    randomThree = activities.filter(activity => activity.activityTypeId !== randomTwo.activityTypeId || activity.activityTypeId !== randomOne.activityTypeId)

    randomThree = randomThree[Math.floor(Math.random() * randomThree.length)]

    let tentativePlan = [randomOne, randomTwo, randomThree]


    thing =  tentativePlan 
return thing
        })

      
}

//what if I return the "generate plan" button and the plan for display in this component then call the component in the return display in DisplayPlan?js? Then the display there is only responsible for the save button display and click event.