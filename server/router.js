//const express
const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getAllApplicationById', (req, res, next) => {
  api.getAllApplicationById(req, res, next);
});


module.exports = router;