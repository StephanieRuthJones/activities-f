import React from 'react'

import Activity from '../Activity'

class ActivitiesList extends React.Component {
    render() {
        return (
            <div className="activities-list">
                {this.props.activities.map(activity => {
                    return <Activity
                        key={activity.id}
                        activity={activity}
                        deleteActivity={this.props.deleteActivity}
                    />
                })}
            </div>
        )
    }
}
export default ActivitiesList