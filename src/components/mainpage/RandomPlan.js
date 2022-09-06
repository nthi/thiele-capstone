//This module creates a function that will pull three random activities from the activities table.
//None of the three should repeat the same activityTypeId.


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

    randomThree = activities.filter(activity => activity.activityTypeId !== randomTwo.activityTypeId && activity.activityTypeId !== randomOne.activityTypeId)

    randomThree = randomThree[Math.floor(Math.random() * randomThree.length)]

    let tentativePlan = [randomOne, randomTwo, randomThree]


    thing =  tentativePlan 
return thing
        })

      
}

