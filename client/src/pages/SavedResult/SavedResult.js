import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
 // import {FormGroup, Panel, FormControl, Button, ControlLabel} from 'react-bootstrap';

class SavedResult extends Component {

	state = {
	    savedArticles: [],
	};

	componentWillMount() {
		console.log("component mounting....");
		this.loadArticles();
	}

	loadArticles = () => {
		console.log("loading articles....");
		API.getSavedArticles()
		.then(res =>{
			console.log("Got saved articles", res.data);
			this.setState({ savedArticles: res.data })
			console.log("Saved in state", this.state.savedArticles);
			})
		.catch(err => console.log(err));
	};

	deleteArticle = id => {	    
	    API.deleteArticle(id)
	      .then(res => 
	      	{
	      		console.log("Deleted!!", res);
	      		this.loadArticles();
	      	})	      	
	      .catch(err => console.log("ERROR", err));
	};

	render(){
		console.log("rendering....");
		return(
		  	<div>
			<h3>Saved Articles {this.state.savedArticles.length}</h3>			    
			{this.state.savedArticles.length ? (
			   <List>
				    {this.state.savedArticles.map(article => (
				      <ListItem key={article._id}>
				        <Link to={article.url} target="_blank">
				          <strong>{article.headline}</strong> 
				       	</Link>
				       	<DeleteBtn onClick={() => this.deleteArticle( article._id)} />       
				      </ListItem>
				    ))}
			  	</List>
	            ) : (
	              <h3>No Results to Display</h3>
	            )}  
		  	</div>
			);
	}
}

export default SavedResult;