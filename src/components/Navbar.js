import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#home">All Activities</a>
            <a href="#home">Completed Activities</a>
            <a href="#news">Images</a>
            <div className="dropdown">
                <button className="dropbtn">Sort by Tag</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar