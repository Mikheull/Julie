var getJSON = require('get-json')

class event {

    request(eventID, cb) {
        getJSON('https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&rows=1&facet=id&refine.id='+ eventID, function(error, response){
            cb(response);
        })
    }

}

module.exports = event;