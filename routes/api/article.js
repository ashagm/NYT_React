const axios = require("axios");
const router = require("express").Router();

// router.getArticles("/articles", (req, res) => {
//   axios
//     .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6a1d59ab48bf4b02954a7a00b708601f", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

module.exports = router;
