var express = require('express');
var router = express.Router();

const Research = require('../model/research');
const research_obj = new Research();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render( 'index', { query: 'null', result: 'null', currentPage: 'home' } );
});


/* POST home page. */
router.post('/', function(req, res, next) {
	let search = req.body.search;

	research_obj.request(search, result => {
		res.render( 'index', { query: search, result: result, currentPage: 'home' } );
    })
});
module.exports = router;
