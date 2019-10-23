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

	research_obj.setQuery(query);
	research_obj.request(result => {
		res.render( 'result/index', { query: query, result: result } );
    })
})


/* POST */
router.post('/:query', function(req, res) {
	let search = req.body.search;
	res.redirect('/result/' + search);
});


/* GET filters */
router.get('/:query/filter:date?:arrondissement?', function (req, res) {
	let query = req.params.query;
	let date_start = req.query.date;
	let address_zipcode = req.query.arrondissement;

	research_obj.setQuery(query);

	if(req.params.date !== ''){ research_obj.addFilter('date_start', date_start) }
	if(req.params.arrondissement !== ''){ research_obj.addFilter('address_zipcode', address_zipcode) }
	
	research_obj.request(result => {
		res.render( 'result/index', { query: query, result: result } );
	})
	
})

module.exports = router;