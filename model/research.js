var getJSON = require('get-json')

class research {

    constructor() {
        this.init()
    }

    
    init() {
        this.filters_type = Array();
        this.filters_val = Array();
        this.query = '';
    }


    request(cb) {
        // Query
        var queryRequest = (this.query == '') ? '' : '&q='+ this.query ;


        // Filtres
        var filter_url = '';
        for(var i = 0; i < this.filters_type.length; i++){
            filter_url = filter_url+'&refine.'+this.filters_type[i]+'='+this.filters_val[i];
        }

        getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&rows=20'+ queryRequest +'&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type'+filter_url, function(error, response){
            cb(response);
        })
    }


    setQuery(query) {
        this.query = query;
    }


    addFilter(filter, value) {
        this.filters_type.push(filter);
        this.filters_val.push(value);
    }


    setFilterType(array) {
        this.filters_type = array;
    }


    setFilterValue(array) {
        this.filters_val = array;
    }

}

module.exports = research;