var express = require('express');
var router = express.Router();

const Event = require('../model/event');
const event_obj = new Event();

/* GET root */
router.get('/', function (req, res) {
	res.send('root');
})


/* GET */
router.get('/:event', function (req, res) {
	let eventID = req.params.event;

	event_obj.request(eventID, result => {
		res.render( 'event/index', { 
			result 
		} );
	})
})

module.exports = router;