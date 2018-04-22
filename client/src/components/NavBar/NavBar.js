import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
	<nav className="navbar">
		<ul>
			<li>
		  		<Link className="navbar-link" to="/">
		    		New York Times 
		    	</Link>
		  	</li>
		  	<li>
	   			<Link className="navbar-link" to="/saved">
	    			Saved Articles
	    		</Link>
	  		</li>
	  	</ul>
  </nav>
);

export default NavBar;