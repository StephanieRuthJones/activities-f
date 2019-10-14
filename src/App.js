import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import NewActivityForm from './components/NewActivityForm'
import ActivitiesList from './components/ActivitiesList'

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
      .then(console.log)

    this.setState({
      activities: [...this.state.activities, newActivity]
    })
  }

  // deleteActivity = (event, activity) => {
  // console.log("data", event.target.parentNode)
  // event.target.parentNode.remove()
  // fetch(`https://pure-caverns-09499.herokuapp.com/activities/${activity.id}`, method: 'DELETE').then(response =>
  //   response.json().then(json => {
  //     return json;
  //   })
  // );



  // }

  render() {
    console.log("state", this.state.activities)
    return (
      <div className="App" >
        <Navbar />
        <h1 className="title">Steph and Adam's Excellent Adventure</h1>
        <div className="body-container">
          <NewActivityForm addActivity={this.addActivity} />

          <ActivitiesList activities={this.state.activities} deleteActivity={this.deleteActivity} />
        </div>
      </div >
    )
  }
}

export default App;
