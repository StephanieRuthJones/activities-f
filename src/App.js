import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Header from './components/Header'
import BodyContainer from './components/containers/BodyContainer'
class App extends React.Component {
  state = {
    activities: []
  }

  componentDidMount() {
    fetch("https://pure-caverns-09499.herokuapp.com/activities")
      .then(response => response.json())
      .then(activities => this.setState({ activities }))
  }

  addActivity = (newActivity) => {
    console.log("form data", newActivity)
    this.setState({
      activities: [...this.state.activities, newActivity]
    })



    fetch("https://pure-caverns-09499.herokuapp.com/activities", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newActivity.title,
        description: newActivity.description
      })
    })
      .then(response => response.json())
      .then(alert("Activity added"))
      .catch(console.error)


  }

  deleteActivity = (event, activity) => {
    console.log("data", activity.id)
    event.target.parentNode.remove()
    fetch(`https://pure-caverns-09499.herokuapp.com/activities/${activity.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(console.error)
  }

  render() {
    console.log("state", this.state.activities)
    return (
      <div className="App" >
        <Navbar />

        <Header addActivity={this.addActivity} />

        <BodyContainer
          activities={this.state.activities}
          deleteActivity={this.deleteActivity}
        />

      </div >
    )
  }
}

export default App;
