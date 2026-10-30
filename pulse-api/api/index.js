// Serverless-compatible Node.js HTTP handler, zero third-party dependencies.
const base = [
 {month:'May', visits:1240, leads:74, revenue:3700},
 {month:'Jun', visits:1490, leads:96, revenue:4620},
 {month:'Jul', visits:1720, leads:118, revenue:5100},
 {month:'Aug', visits:1680, leads:111, revenue:4950},
 {month:'Sep', visits:2130, leads:149, revenue:6820},
 {month:'Oct', visits:2450, leads:176, revenue:7600}
];
module.exports = function handler(req,res){
 const pathname = new URL(req.url,'http://localhost').pathname;
 res.setHeader('Content-Type','application/json; charset=utf-8');
 res.setHeader('Cache-Control','public, max-age=120');
 res.setHeader('Access-Control-Allow-Origin','*');
 if(req.method!=='GET'){res.setHeader('Allow','GET');res.statusCode=405;return res.end(JSON.stringify({error:'Method not allowed'}));}
 if(pathname==='/api/health'){return res.end(JSON.stringify({status:'ok',service:'Pulse Metrics API',version:'1.0.0'}));}
 if(pathname==='/api/metrics')return res.end(JSON.stringify({source:'Datos de demostración',metrics:base}));
 if(pathname==='/api/summary'){
  const sum=k=>base.reduce((a,m)=>a+m[k],0);const visits=sum('visits'),leads=sum('leads');
  return res.end(JSON.stringify({source:'Datos de demostración',visits,leads,revenue:sum('revenue'),conversionRate:Number((leads/visits*100).toFixed(2)),months:base.length}));
 }
 res.statusCode=404;return res.end(JSON.stringify({error:'Endpoint not found',endpoints:['/api/health','/api/metrics','/api/summary']}));
};
