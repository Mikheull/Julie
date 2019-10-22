var express = require('express');
var router = express.Router();
var getJSON = require('get-json')

/* GET root */
router.get('/', function (req, res) {

    getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type', function(error, response){
        console.log(response.nhits);
        res.send(response);
    })
	
})


router.get('/:keyword', function (req, res) {
    var keyword = req.params.keyword;

    getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q='+ keyword +'&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type', function(error, response){
        res.send(response);
    })
	
})
module.exports = router;