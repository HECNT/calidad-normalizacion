var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  if (req.session.usuario) {
    res.redirect('inicio')
  } else {
    res.redirect('inicio')
  }
});

router.get('/inicio', function(req, res) {
  res.render('inicio', {usuario:true, url : `https://35.229.59.251:${PUERTO}/`})
});

router.get('/login', function(req, res) {
  res.send('Necesitas logearte')
});

module.exports = router;
