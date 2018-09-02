var express        = require('express');
var router         = express.Router();
var ctrl           = require('../controllers/home');
var fs             = require('fs');
var verifyToken    = require('./middleware');
var jwt            = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config         = require('./config');

router.get('/get-init', getInit);
router.get('/get-monitoreo', getMonitoreo);
router.get('/get-taller', getTaller);
router.get('/get-vehiculo', getVehiculo);

function getInit(req, res) {
  ctrl.getInit()
  .then((result)=> {
    res.json(result)
  })
}

function getMonitoreo(req, res) {
  ctrl.getMonitoreo()
  .then((result)=> {
    res.json(result)
  })
}

function getTaller(req, res) {
  ctrl.getTaller()
  .then((result)=> {
    res.json(result)
  })
}

function getVehiculo(req, res) {
  ctrl.getVehiculo()
  .then((result)=> {
    res.json(result)
  })
}

module.exports = router;
