//slice or split the links to get just that last bit
//give my video div an id and link set to id can let me jump
//put something in state to help me know what vid, then in part at bottom retrieve that state...

import { useEffect, useState } from "react"
import YoutubeEmbed from "./YoutubeEmbed"

//I will need a split function
//a clickHandler function
//a component that manages the results

//this will be child of MainPage.js, possibly grandchild of DisplayPlan.js, take props

//tacoPlan is the current state for the three-activity plan array onscreen. Do I need the update the array part here? Put in just in case. Remove if not.

export const EmbedManager = ({linkClick}) => {
    // const [links, setLinks] = useState([])

    // useEffect(() => {
    //     const findLinks = tacoPlan.filter(plan => plan.link.includes("youtube"))
    //     setLinks(findLinks)
    // }, [tacoPlan])

    //need to set the state for the youtube link Only if clicked and if (plan.link.includes("youtube") )
    //I need to get YouTube link clicked from DisplayPlan
    //how do I capture the "they clicked this one" if there are multiple YT links in the links array I think I'm creating above? Is that logic here or is it some kind of state in DisplayPlan.js?
    


    //let embedIdArr =  plan.link.split("?v=")
    //I think I can also put this into the useEffect with some kind of chained methods?
    //that will give me [first half of youtube addy, the thing I want for src embedID in YoutubeEmbed.js]
    //Call YoutubeEmbed in the return of this component and use embedIdArr[1]

    // return (
    //     <YoutubeEmbed />
    // )
    
}

//send link as props to YoutubeEmbed.js


