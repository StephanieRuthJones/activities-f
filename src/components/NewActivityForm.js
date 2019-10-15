import React from 'react'

class NewActivityForm extends React.Component {
    state = {
        title: "",
        description: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addActivity(this.state)

    }

    handleChange = (event) => {
        event.preventDefault()

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        return (
            <form id="new-activity-form" className="new-activity-form" onSubmit={this.handleSubmit}>
                <h1>Add New Activity</h1>
                <label htmlFor="title">Title</label>
                <input name="title" onChange={this.handleChange} />
                <label htmlFor="title">Description</label>
                <input name="description" onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NewActivityForm