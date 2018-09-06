var model = require('../models/home')

module.exports = {
  getInit: getInit,
  getMonitoreo: getMonitoreo,
  getTaller: getTaller,
  getVehiculo: getVehiculo,
  getCount: getCount,
  getMonitoreoList: getMonitoreoList,
  setNewMonitoreo: setNewMonitoreo
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

function getMonitoreoList() {
  return new Promise(function(resolve, reject) {
    var p1 = model.getVehiculoList();
    var p2 = model.getEstatusMonitoreo();

    Promise.all([p1, p2])
    .then((res)=> {
      var item = {
        err: false,
        result: res
      }
      resolve(item)
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

function getCount() {
  return new Promise(function(resolve, reject) {

    var p1 = model.getVehiculoC()
    var p2 = model.getTallerC()
    var p3 = model.getMonitoreoC()
    var p4 = model.getInitC()

    Promise.all([p1, p2, p3, p4])
    .then((res)=> {
      var item = {
        vehiculo: res[0][0].res,
        taller: res[1][0].res,
        monitoreo: res[2][0].res,
        viaje: res[3][0].res
      }

      resolve({ err: false, result: item })
    })

  });
}

function setNewMonitoreo(d) {
  return new Promise(function(resolve, reject) {
    model.setNewMonitoreo(d)
    .then((res)=> {
      resolve(res);
    })
  });
}
