var conn = require('../models/main')

module.exports = {
  getInit: getInit,
  getMonitoreo: getMonitoreo,
  getTaller: getTaller,
  getVehiculo: getVehiculo,
  getInitC: getInitC,
  getMonitoreoC: getMonitoreoC,
  getTallerC: getTallerC,
  getVehiculoC: getVehiculoC
}

function getInit() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      select
      	a1.vehiculo_id,
      	a1.ini,
      	a1.fin,
      	a1.estatus_viaje_id,
      	a2.nombre as vehiculo,
      	a2.fecha as alta,
      	a2.usuario_alta,
      	a2.tipo_id,
      	a3.nombre as tipo,
      	a2.vehiculo_estatus_id,
      	a4.nombre as estatus
      from
      	viaje as a1
      INNER join
      	vehiculo as a2
      on
      	a1.vehiculo_id = a2.vehiculo_id
      INNER join
      	tipo as a3
      on
      	a2.tipo_id = a3.tipo_id
      INNER join
      	vehiculo_estatus as a4
      on
      	a2.vehiculo_estatus_id = a4.vehiculo_estatus_id

      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}

function getMonitoreo() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      SELECT
      	a3.nombre as vehiculo,
      	a1.monitoreo_id,
      	a1.fecha,
      	a1.nota,
      	a1.usuario,
      	a1.vehiculo_id,
      	a2.nombre as estatus
      FROM
      	monitoreo AS a1
      inner join
      	estatus_monitoreo as a2
      on
      	a1.estatus_monitoreo_id = a2.estatus_monitoreo_id
      inner join
      	vehiculo as a3
      on
      	a1.vehiculo_id = a3.vehiculo_id

      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}

function getTaller() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      select
      	a1.vehiculo_id,
      	a1.nombre as vehiculo,
      	a1.vehiculo_estatus_id,
      	a2.vehiculo_falla_id,
      	a2.ini,
      	a2.falla_id,
      	a2.estatus_falla_id,
      	a2.taller_id,
      	a3.nombre as estatus_vehiculo,
      	a4.nombre as falla,
      	a5.nombre as estatus_falla,
      	a6.nombre as taller
      from
      	vehiculo as a1
      INNER join
      	vehiculo_falla as a2
      on
      	a1.vehiculo_id = a2.vehiculo_id
      INNER join
      	vehiculo_estatus as a3
      on
      	a1.vehiculo_estatus_id = a3.vehiculo_estatus_id
      INNER join
      	falla as a4
      on
      	a2.falla_id = a4.falla_id
      INNER join
      	estatus_falla as a5
      on
      	a2.estatus_falla_id = a5.estatus_falla_id
      INNER join
      	taller as a6
      on
      	a2.taller_id = a6.taller_id

      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}

function getVehiculo() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      select
      	a1.vehiculo_id,
      	a1.nombre as vehiculo,
      	a1.usuario_alta,
      	a1.activo,
      	a2.nombre as tipo,
      	a3.nombre as estatus
      from
      	vehiculo as a1
      INNER join
      	tipo as a2
      on
      	a1.tipo_id = a2.tipo_id
      INNER join
      	vehiculo_estatus as a3
      on
      	a1.vehiculo_estatus_id = a3.vehiculo_estatus_id


      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}

// INICIA COUNT
function getInitC() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      select
        COUNT(*) as res
      from
        viaje as a1
      INNER join
        vehiculo as a2
      on
        a1.vehiculo_id = a2.vehiculo_id
      INNER join
        tipo as a3
      on
        a2.tipo_id = a3.tipo_id
      INNER join
        vehiculo_estatus as a4
      on
        a2.vehiculo_estatus_id = a4.vehiculo_estatus_id


      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}

function getMonitoreoC() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      SELECT
      	COUNT(*) as res
      FROM
      	monitoreo AS a1
      inner join
      	estatus_monitoreo as a2
      on
      	a1.estatus_monitoreo_id = a2.estatus_monitoreo_id
      inner join
      	vehiculo as a3
      on
      	a1.vehiculo_id = a3.vehiculo_id


      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}

function getTallerC() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      select
      	COUNT(*) as res
      from
      	vehiculo as a1
      INNER join
      	vehiculo_falla as a2
      on
      	a1.vehiculo_id = a2.vehiculo_id
      INNER join
      	vehiculo_estatus as a3
      on
      	a1.vehiculo_estatus_id = a3.vehiculo_estatus_id
      INNER join
      	falla as a4
      on
      	a2.falla_id = a4.falla_id
      INNER join
      	estatus_falla as a5
      on
      	a2.estatus_falla_id = a5.estatus_falla_id
      INNER join
      	taller as a6
      on
      	a2.taller_id = a6.taller_id


      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}

function getVehiculoC() {
  return new Promise(function(resolve, reject) {
    conn.query(`

      select
      	COUNT(*) as res
      from
      	vehiculo as a1
      INNER join
      	tipo as a2
      on
      	a1.tipo_id = a2.tipo_id
      INNER join
      	vehiculo_estatus as a3
      on
      	a1.vehiculo_estatus_id = a3.vehiculo_estatus_id


      `,function(err, result, fields){
      if (err) {
        resolve({err: true, description: err})
      } else {
        resolve(result)
      }
    })
  })
}
