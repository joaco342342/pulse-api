const respond = require('./_response');
const metrics = require('./_data');
module.exports = (req,res) => respond(req,res,{source:'Datos de demostración',metrics});
