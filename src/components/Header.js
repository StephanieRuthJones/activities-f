import React from 'react'

import NewActivityForm from './NewActivityForm'

class Header extends React.Component {
    state = {
        showForm: false
    }
    handleClick = () => {
        this.setState({ showForm: !this.state.showForm })
    }
    render() {
        return (

            <header>
                <h1 className="title">Steph and Adam's Excellent Adventure</h1><br></br>
                <button className="view-form-button" onClick={this.handleClick}>Add Activity</button>
                {this.state.showForm
                    ? <NewActivityForm addActivity={this.props.addActivity} />
                    : null}

            </header>

        )
    }
}

export default Header