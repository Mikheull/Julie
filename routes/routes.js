const express = require('express');
const router = express.Router();

const indexRouter = require('./index');
const resultRouter = require('./result');
const eventRouter = require('./event');

router.use('/', indexRouter);
router.use('/result', resultRouter);
router.use('/event', eventRouter);

module.exports = router;