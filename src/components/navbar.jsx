import React, { Component } from 'react';


const NavBar = (props) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <span className="badge badge-primary m-2"> { props.totalCounters} </span>
            </div>
        </nav>
     );
}
 
export default NavBar;
