var express = require('express');
var router = express.Router();

const Research = require('../model/research');
const research_obj = new Research();


/* GET root */
router.get('/', function (req, res) {
	res.render( 'result/index', { error: 'no-query' } );
})


/* GET */
router.get('/:query', function (req, res) {
	let query = req.params.query;

	research_obj.request(query, result => {
		res.render( 'result/index', { query: query, result: result } );
    })
})


/* POST */
router.post('/:query', function(req, res) {
	let search = req.body.search;
	res.redirect('/result/' + search);

});

module.exports = router;