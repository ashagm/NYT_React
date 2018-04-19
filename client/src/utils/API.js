import axios from "axios";

export default {
  getArticles: function(query) {
  	console.log("Getting articles....", query);
  	// 6a1d59ab48bf4b02954a7a00b708601f
  	
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a15142ef741446348ede55f0e027778a" , 
    	{ qs: 
    		{ 
    			q: query.searchTerm,
    			begin_date: query.startYear,
    			end_date: query.endYear
    		} 
    	});
  }
};
