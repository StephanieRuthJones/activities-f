import React from 'react'

import Activity from './Activity'

class ActivitiesList extends React.Component {
    render() {
        return (
            <div className="activities-list">
                <h1>Activities List</h1>
                {this.props.activities.map(activity => {
                    return <Activity activity={activity} deleteActivity={this.props.deleteActivity} />
                })}
            </div>
        )
    }
}
export default ActivitiesList