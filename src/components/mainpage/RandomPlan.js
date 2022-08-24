//this module needs to pull three random activities from the activities table.
//none of the three should repeat the same activityTypeId.
//ideas: Math.floor(Math.random) etc. three times, and each time add more logic before the randomizing happens.
//code that might work but I'm not sure I understand it:
// function getMultipleRandom(arr, num) {

import { useEffect, useState } from "react"

//     const shuffled = [...arr].sort(() => 0.5 - Math.random());

//     return shuffled.slice(0, num);
//   }

//.sort is a kind of shuffle in an array that changes the array directly, sorted by UTF-16 code units values
//since .sort directly changes an array, does creating this function/variable shuffled mean that we avoid directly shuffling the original table? or is it the ... that's doing it?
//then we give .sort some guidelines (the blog I pulled the code from seems to be saying that .5-math.random will tell .sort to either sort forward or reverse order (if return value is greater than 0, "b" comes before "a" and if it is less than 0, "a" before "b". if equal, original order. I don't want original order, though.)
//then slice takes the number I want from the array.
//problem: would still need to evaluate my random choices to make sure activityTypeId doesn't repeat, and have code to grab one or two new distinct activities if there are repeats.

//also might want to sort by ... activityTypeId

//pull first one, filter out the same activityTypeId before second draw
//pull third that doesn't have 2nd id...



export const RandomPlan = () => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/activities`)
        .then((response) => response.json())
        .then((activityArray) => {
            setActivities(activityArray)
        })
    },[])
    let randomOne
    let randomTwo
    let randomThree

    randomOne = activities[Math.floor(Math.random() * activities.length)]
    
    randomTwo = activities.filter(activity => activity.activityTypeId !== randomOne.activityTypeId)[Math.floor(Math.random() * activities.length)]

    randomThree = activities.filter(activity => activity.activityTypeId !== (randomTwo.activityTypeId || randomOne.activityTypeId))[Math.floor(Math.random() * activities.length)]

    let tentativePlan = [randomOne, randomTwo, randomThree]

    console.log(tentativePlan)

    return tentativePlan
}

//what if I return the "generate plan" button and the plan for display in this component then call the component in the return display in DisplayPlan?js? Then the display there is only responsible for the save button display and click event.