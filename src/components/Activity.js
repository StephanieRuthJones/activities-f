import React from 'react'

class Activity extends React.Component {

    handleClick = event => {
        event.preventDefault()
        this.props.deleteActivity(event, this.props.activity)
    }
    render() {
        console.log("props", this.props)
        return (
            <div className="activity" key={this.props.activity.id} >
                <h2>{this.props.activity.title}</h2>
                <img alt="nature" src="https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1929&q=80" />
                <p>{this.props.activity.description}</p>

                <button onClick={(event) => this.handleClick(event)}>Delete</button>
                <button>Edit</button>
            </div>


        )
    }

}
export default Activity