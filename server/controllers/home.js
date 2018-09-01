var model = require('../models/home')

module.exports = {
  getInit: getInit
}

function getInit() {
  return new Promise(function(resolve, reject) {
    model.getInit()
    .then((res)=> {
      resolve(res);
    })
  });
}
