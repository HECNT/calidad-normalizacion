var conn = require('../models/main')

module.exports = {
  getInit: getInit
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
