var express = require('express');
var router = express.Router();


/* GET root */
router.get('/', function (req, res) {
	res.send('root');
})


/* GET */
router.get('/:event', function (req, res) {
	res.send(req.params.event);
})

module.exports = router;