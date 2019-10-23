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
	let search = req.body.search;

	res.redirect('/result/' + search);
});

module.exports = router;