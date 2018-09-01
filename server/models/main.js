var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '104.198.75.251',
  user     : 'calidad_normalizacion',
  password : '1234',
  database : 'calidad'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
