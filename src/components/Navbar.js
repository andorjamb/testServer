import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <NavLink to="/">This Page</NavLink>
            <NavLink to="/page2">Page2</NavLink>
            <NavLink path="/signin">Sign in</NavLink>

        </div>
    )

}

export default Navbar;