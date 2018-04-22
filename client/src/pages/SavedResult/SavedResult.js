import React, { Component } from "react";
import {Panel} from 'react-bootstrap';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class SavedResult extends Component {

	state = {
	    savedArticles: [],
	};

	componentDidMount() {
		this.loadArticles();
	}

	loadArticles = () => {
		API.getSavedArticles()
		.then(res =>
			this.setState({ savedArticles: res.data })
			)
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
		return(
		  	<Panel>
			    <Panel.Heading>
			      <Panel.Title componentClass="h3">Saved Articles</Panel.Title>
			    </Panel.Heading>			    

			    <Panel.Body>
			    	 {this.state.savedArticles.length ? (
		               <List>
		                {this.state.savedArticles.map(article => (
		                  <ListItem key={article._id}>
		                    <Link to={article.web_url} target="_blank">
		                      <strong>
		                        {article.headline.main} 
		                      </strong>
		                   </Link>
		                   <DeleteBtn 
		                   onClick={() => this.deleteArticle( article._id)} />
		                  </ListItem>
		                ))}
		              </List>
		            ) : (
		              <h3>No Results to Display</h3>
		            )}
   
			    </Panel.Body>
		  	</Panel>
		);
	}
}