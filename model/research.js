var getJSON = require('get-json')

class research {

    constructor() {
        this.filters_type = Array();
        this.filters_val = Array();
        this.query;
    }

    init() {
        this.filters_type = Array();
        this.filters_val = Array();
        this.query = '';
    }

    request(cb) {

        var filter_url = '';
        for(var i = 0; i < this.filters_type.length; i++){
            console.log(this.filters_type[i] + ' - ' + this.filters_val[i]);
            filter_url = filter_url+'&refine.'+this.filters_type[i]+'='+this.filters_val[i];
        }
        console.log(filter_url);
        

        getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q='+ this.query +'&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type'+filter_url, function(error, response){
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

}

module.exports = research;