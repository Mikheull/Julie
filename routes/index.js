var express = require('express');
var router = express.Router();

const Research = require('../model/research');
const research_obj = new Research();


/* GET home page. */
router.get('/', function(req, res) {
	res.render( 'index' );
});


/* POST home page. */
router.post('/', function(req, res) {
	research_obj.init();

	let search = req.body.search;
	let date = req.body.date;

	if(typeof date !== 'undefined' && date){ research_obj.addFilter('date_start', date) }
	res.redirect('/result/' + search);
});

module.exports = router;