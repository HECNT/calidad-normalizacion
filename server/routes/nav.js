var express = require('express');
var router = express.Router();
var uri = null;

isProduction = true

if (isProduction) {
  uri = `http://35.196.109.19:${PUERTO}/`
} else {
  uri = `http://localhost:${PUERTO}/`
}

router.get('/', function(req, res) {
  if (req.session.usuario) {
    res.redirect('inicio')
  } else {
    res.redirect('inicio')
  }
});

router.get('/inicio', function(req, res) {
  res.render('inicio', {usuario:true, url: uri })
});

router.get('/login', function(req, res) {
  res.send('Necesitas logearte')
});

module.exports = router;
