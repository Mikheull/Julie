var express = require('express');
var router = express.Router();

const Research = require('../model/research');
const research_obj = new Research();


/* GET root */
router.get('/', function (req, res) {
	res.render( 'result/index', { query: 'null', result: 'null' } );
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
	research_obj.init();

	let query = req.body.query;

	let date_start = req.body.date;
	let address_zipcode = req.body.arrondissement;
	let access_type = req.body.access_type;
	// let acces_pmr = req.body.acces_pmr;
	// let access_malvoyant = req.body.access_malvoyant;
	// let acess_malentendant = req.body.acess_malentendant;

	if(typeof date_start !== 'undefined' && date_start){ research_obj.addFilter('date_start', date_start) }
	if(typeof address_zipcode !== 'undefined' && address_zipcode){ research_obj.addFilter('address_zipcode', address_zipcode) }
	if(typeof access_type !== 'undefined' && access_type){ research_obj.addFilter('access_type', access_type) }
	// if(typeof acces_pmr !== 'undefined' && acces_pmr){ research_obj.addFilter('address_zipcode', acces_pmr) }
	// if(typeof access_malvoyant !== 'undefined' && access_malvoyant){ research_obj.addFilter('address_zipcode', access_malvoyant) }
	// if(typeof acess_malentendant !== 'undefined' && acess_malentendant){ research_obj.addFilter('address_zipcode', acess_malentendant) }

	res.redirect('/result/' + query);

});

module.exports = router;