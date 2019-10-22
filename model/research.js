var getJSON = require('get-json')

class research {

    request(query, cb) {
        getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q='+ query +'&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type', function(error, response){
            cb(response);
        })
    }
}

module.exports = research;