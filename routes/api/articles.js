
const axios = require("axios");
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(articlesController.findAll)

// router.route("/save")
//   .post(articlesController.create);

router.post("/save", (req, res) => {
	console.log("******In Save*****", req.body);
});  

router
  .route("/:id")
  .delete(articlesController.remove);


// route to search the new york times api
router.get("/search", (req, res) => {

  axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a15142ef741446348ede55f0e027778a" , 
    	{ qs: 
    		{ 
    			q: req.params.q,
    			begin_date: req.params.begin_date,
    			end_date: req.params.end_date
    		} 
    	})
    .then(function(results) {
    	res.json(results.data.response.docs)
    })
    .catch(err => res.status(422).json(err.response));
});  	

module.exports = router;
