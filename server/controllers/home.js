var model = require('../models/home')

module.exports = {
  getInit: getInit,
  getMonitoreo: getMonitoreo,
  getTaller: getTaller,
  getVehiculo: getVehiculo
}

function getInit() {
  return new Promise(function(resolve, reject) {
    model.getInit()
    .then((res)=> {
      resolve(res);
    })
  });
}

function getMonitoreo() {
  return new Promise(function(resolve, reject) {
    model.getMonitoreo()
    .then((res)=> {
      resolve(res);
    })
  });
}

function getTaller() {
  return new Promise(function(resolve, reject) {
    model.getTaller()
    .then((res)=> {
      resolve(res);
    })
  });
}

function getVehiculo() {
  return new Promise(function(resolve, reject) {
    model.getVehiculo()
    .then((res)=> {
      resolve(res);
    })
  });
}
