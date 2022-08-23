
export const Plan = ({plan, activities}) => {

    return (
        
        <div className="logged__item" key={plan.id}>
            <p>Activity One: {activities.find(x=> x.id === plan.activityOneId)?.activityName} </p>
            <p>Details: {activities.find(x=> x.id === plan.activityOneId)?.activityDescription}</p>

            <p>Activity Two: {activities.find(x=> x.id === plan.activityTwoId)?.activityName}</p>
            <p>Details: {activities.find(x=> x.id === plan.activityTwoId)?.activityDescription}</p>

            <p>Activity Three: {activities.find(x=> x.id === plan.activityThreeId)?.activityName}</p>
            <p>Details: {activities.find(x=> x.id === plan.activityThreeId)?.activityDescription}</p>
        </div>
    )
}