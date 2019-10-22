const express = require('express');
const router = express.Router();

const indexRouter = require('./index');
const resultRouter = require('./result');
const eventRouter = require('./event');
const apiRouter = require('./api');

router.use('/', indexRouter);
router.use('/result', resultRouter);
router.use('/event', eventRouter);
router.use('/api', apiRouter);

module.exports = router;