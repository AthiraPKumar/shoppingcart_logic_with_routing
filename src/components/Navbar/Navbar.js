import React from 'react';


const Navbar = function(props){
        return ( 
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar
                <span className="badge badge-pill badge-secondary m-2">{props.totalCount}</span>
                </a>


                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="AboutUs">AboutUs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="User">User</a>
                    </li>
                </ul>

                
                </nav>
            </div>
         );
}
 
export default Navbar;
