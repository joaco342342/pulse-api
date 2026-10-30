const respond = require('./_response');
const metrics = require('./_data');
module.exports = (req,res) => {
 const sum=key=>metrics.reduce((total,month)=>total+month[key],0);
 const visits=sum('visits'),leads=sum('leads');
 return respond(req,res,{source:'Datos de demostración',visits,leads,revenue:sum('revenue'),conversionRate:Number((leads/visits*100).toFixed(2)),months:metrics.length});
};
