import React from 'react'

import ActivitiesList from './ActivitiesList'

const BodyContainer = (props) => {
    return (
        <div className="body-container">
            <ActivitiesList activities={props.activities} deleteActivity={props.deleteActivity} />
        </div>
    )
}
export default BodyContainer