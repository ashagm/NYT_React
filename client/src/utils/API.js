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
  },

  searchArticles: function(query){
    console.log("searchArticles", query);
    return axios.get("/api/articles/search", query);
  },

  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves article to the database
  saveArticle: function(articleData) {
  	console.log("In SaveArticle", articleData);
    return axios.post("/api/articles/save", {
                                             id: "4fd1b09a8eb7c8105d6d2108", 
                                             key: "4fd1b09a8eb7c8105d6d2108", 
                                             title: "Auburn Sees Value of Ties", 
                                             url: "https://www.nytimes.com/1990/10/01/sports/auburn-sees-value-of-ties.html", 
                                             date: "1990-10-01T00:00:00Z"
                                           }
                                           );
  }
};
