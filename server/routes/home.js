var express        = require('express');
var router         = express.Router();
var ctrl           = require('../controllers/home');
var fs             = require('fs');
var verifyToken    = require('./middleware');
var jwt            = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config         = require('./config');

router.get('/get-init', getInit);

function getInit(req, res) {
  ctrl.getInit()
  .then((result)=> {
    res.json(result)
  })
}

module.exports = router;
