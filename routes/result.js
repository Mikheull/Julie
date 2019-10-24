var express = require('express');
var router = express.Router();

const Research = require('../model/research');
const research_obj = new Research();


/* GET root */
router.get('/', function (req, res) {
	res.render( 'result/error')
})


/* GET */
router.get('/:query', function (req, res) {

	let query = req.params.query;

	research_obj.setQuery(query);
	research_obj.setCurrentPage(0);

	research_obj.request(result => {
		let nbPage = Math.round( result.nhits / 20 );

		res.render( 'result/index', { 
			query, 
			result,
			nbPage: nbPage,
			page: 0 
		} );
    })
})


/* POST */
router.post('/:query', function(req, res) {
	research_obj.init();

	let query = req.body.query;

	let date_start = req.body.date;
	let address_zipcode = req.body.arrondissement;
	let price_type = req.body.price_type;
	let access_type = req.body.access_type;
	let acces_pmr = req.body.acces_pmr;
	let access_malvoyant = req.body.access_malvoyant;
	let acess_malentendant = req.body.acess_malentendant;

	if(typeof date_start !== 'undefined' && date_start){ research_obj.addFilter('date_start', date_start) }
	if(typeof address_zipcode !== 'undefined' && address_zipcode){ research_obj.addFilter('address_zipcode', address_zipcode) }
	if(typeof price_type !== 'undefined' && price_type){ research_obj.addFilter('price_type', price_type) }
	if(typeof access_type !== 'undefined' && access_type){ research_obj.addFilter('access_type', access_type) }
	if(typeof acces_pmr !== 'undefined' && acces_pmr && acces_pmr == 'on'){ research_obj.addFilter('pmr', 1) }
	if(typeof access_malvoyant !== 'undefined' && access_malvoyant && access_malvoyant == 'on'){ research_obj.addFilter('blind', 1) }
	if(typeof acess_malentendant !== 'undefined' && acess_malentendant && acess_malentendant == 'on'){ research_obj.addFilter('deaf', 1) }

	res.redirect('/result/' + query);
});



/* GET */
router.get('/:query/:page', function (req, res) {

	let query = req.params.query;
	let page = req.params.page;

	research_obj.setQuery(query);
	research_obj.setCurrentPage(page);

	research_obj.request(result => {
		let nbPage = Math.round( result.nhits / 20 );

		res.render( 'result/index', { 
			query, 
			result, 
			nbPage,
			page
		} );
    })
})


/* POST */
router.post('/:query/:page', function(req, res) {
	research_obj.init();

	let query = req.body.query;
	let page = req.body.page;

	let date_start = req.body.date;
	let address_zipcode = req.body.arrondissement;
	let price_type = req.body.price_type;
	let access_type = req.body.access_type;
	let acces_pmr = req.body.acces_pmr;
	let access_malvoyant = req.body.access_malvoyant;
	let acess_malentendant = req.body.acess_malentendant;

	if(typeof date_start !== 'undefined' && date_start){ research_obj.addFilter('date_start', date_start) }
	if(typeof address_zipcode !== 'undefined' && address_zipcode){ research_obj.addFilter('address_zipcode', address_zipcode) }
	if(typeof price_type !== 'undefined' && price_type){ research_obj.addFilter('price_type', price_type) }
	if(typeof access_type !== 'undefined' && access_type){ research_obj.addFilter('access_type', access_type) }
	if(typeof acces_pmr !== 'undefined' && acces_pmr && acces_pmr == 'on'){ research_obj.addFilter('pmr', 1) }
	if(typeof access_malvoyant !== 'undefined' && access_malvoyant && access_malvoyant == 'on'){ research_obj.addFilter('blind', 1) }
	if(typeof acess_malentendant !== 'undefined' && acess_malentendant && acess_malentendant == 'on'){ research_obj.addFilter('deaf', 1) }

	res.redirect('/result/' + query + '/' + page);
});
module.exports = router;