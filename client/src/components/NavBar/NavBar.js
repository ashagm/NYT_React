import React, {Component} from "react";
import API from "../../utils/API";
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {	

	state = {
		savedArticles: []
	};		 
  
	findAll() {
		 API.getSavedArticles()
	      .then(res => { 
	      	console.log("Fetched articles", res);
	      	this.setState({ savedArticles: res.data }); 
	      	console.log(this.state.savedArticles);
	      	})	    	
	      .catch(err => console.log(err));

	}

	render(){
		return (
			<div>
		<Navbar>
		  <Navbar.Header>
		    <Navbar.Brand>NY Times Article Search</Navbar.Brand>    
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Navbar.Text>
		      <Navbar.Link href="#"></Navbar.Link>
		    </Navbar.Text>
		    <Navbar.Text pullRight>
		    	<span className="saved-btn">
					<button className="btn-primary" onClick={() => this.findAll()}>Saved Articles
	    			</button>
	  			</span>
		    </Navbar.Text>
		  </Navbar.Collapse>
		</Navbar>
		</div>
	);
	}
};

export default NavBar;