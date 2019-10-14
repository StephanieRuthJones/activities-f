import React from 'react'

class Activity extends React.Component {

    handleClick = event => {
        event.preventDefault()
        console.log("onclick info", this.props)
        this.props.deleteActivity(event, this.props.activity)
    }
    render() {
        console.log("props", this.props)
        return (
            <div className="activity" key={this.props.activity.id} >
                <h2>Title: {this.props.activity.title}</h2>
                <p>Description: {this.props.activity.description}</p>

                <button onClick={(event) => this.handleClick(event)}>Delete</button>
                <button>Edit</button>
            </div>


        )
    }

}
export default Activity