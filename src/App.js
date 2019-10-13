import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <h1>Adam and Steph's Excellent Adventure</h1>
        <div className="navbar">
          <a href="#home">All Activities</a>
          <a href="#home">Completed Activities</a>
          <a href="#news">Images</a>
          <div className="dropdown">
            <button className="dropbtn">Dropdown
      <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a>Link 3</a>
            </div>
          </div>
        </div>
        {/* <div className="topnav">
        <button>All Activities</button>
        <button>
          Show menu
        </button>

        <div className="menu">
          <button> Menu item 1 </button>
          <button> Menu item 2 </button>
          <button> Menu item 3 </button>
        </div>

        <input type="text" name="search" placeholder="Search..." />
      </div> */}

      </div >
    )
  }
}

export default App;
