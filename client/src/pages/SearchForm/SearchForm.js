import React, { Component } from "react";
import API from "../../utils/API";
import {FormGroup, Panel, FormControl, Button, ControlLabel} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import SaveBtn from "../../components/SaveBtn";

class SearchForm extends Component{

	state = {
		searchTerm: "",
		startYear: "",
		endYear: "",
		articles: []
	};


	handleInputChange = event => {
		const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
	}


	handleFormSubmit = event => {
		event.preventDefault();
	      API.getArticles({
	        searchTerm: this.state.searchTerm,
	        startYear: this.state.startYear,
	        endYear: this.state.endYear
	      })
	        .then(res => {
	        	console.log(res);
	        	var articlesArr = this.state.articles.concat(res.data.response.docs);
				this.setState({ articles: articlesArr })
	        	// this.setState({ articles: res.data.response.docs })
	        	// this.state.articles.push(res.data); 
	        	console.log("Articles", this.state.articles);      	
	        	}
        	)
	        .catch(err => console.log(err));
	}

	  saveArticle = id => {
	    API.saveArticle(id)
	      .then(res => console.log("saved"))

	      	// this.loadArticles()
	      	
	      .catch(err => console.log(err));
	  };

	render(){
		return (
			<div>
			<Panel>
			    <Panel.Heading>
			      <Panel.Title componentClass="h3">Search Articles</Panel.Title>
			    </Panel.Heading>
			    <Panel.Body>
			    	<form>			    	
			    	  	<FormGroup controlId="formControlsText">
      						<ControlLabel>Topic</ControlLabel>
      						<FormControl type="text" className="form-control" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange}/>
    					</FormGroup>
    					<FormGroup controlId="formControlsStart">
      						<ControlLabel>Start Year</ControlLabel>
      						<FormControl type="text" className="form-control" name="startYear" value={this.state.startYear} onChange={this.handleInputChange}/>
    					</FormGroup>
    					<FormGroup controlId="formControlsEnd">
      						<ControlLabel>End Year</ControlLabel>
      						<FormControl type="text" className="form-control" name="endYear" value={this.state.endYear} onChange={this.handleInputChange}/>
    					</FormGroup>
					  	<FormGroup controlId="formControlsSubmit">
					    	<Button className="btn btn-large" type="submit" onClick={this.handleFormSubmit}>Search</Button>
					  	</FormGroup>
					</form>
			    </Panel.Body>
		  	</Panel>

		  	<Panel>
			    <Panel.Heading>
			      <Panel.Title componentClass="h3">Search Results</Panel.Title>
			    </Panel.Heading>			    

			    <Panel.Body>
			    	{/*<div>Article length {this.state.articles.length } <br/>
			    	{this.state.articles.length ? 'articles present' : 'articles absent'}
			    	</div> */}
			    	 {this.state.articles.length ? (
		               <List>
		                {this.state.articles.map(article => (
		                  <ListItem key={article._id}>
		                    <Link to={article.web_url} target="_blank">
		                      <strong>
		                        {article.headline.main} 
		                      </strong>
		                      <p>
		                      	Date Published : {article.pub_date}
		                      </p>
		                   </Link>
		                   <SaveBtn onClick={() => this.saveArticle(article._id)} />
		                  </ListItem>
		                ))}
		              </List>
		            ) : (
		              <h3>No Results to Display</h3>
		            )}
           
			    </Panel.Body>
		  	</Panel>
		  	</div>
		);		
	}

}

export default SearchForm;