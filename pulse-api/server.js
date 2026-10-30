const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const routes = {
 '/api/health': require('./api/health'),
 '/api/metrics': require('./api/metrics'),
 '/api/summary': require('./api/summary'),
};
const html=fs.readFileSync(path.join(__dirname,'public','index.html'));
http.createServer((req,res)=>{
 res.status=(code)=>{res.statusCode=code;return res;};
 res.json=(data)=>res.end(JSON.stringify(data));
 const pathname=new URL(req.url,'http://localhost').pathname;
 if(pathname==='/'||pathname==='/index.html'){
  res.setHeader('Content-Type','text/html; charset=utf-8');
  return res.end(html);
 }
 if(routes[pathname])return routes[pathname](req,res);
 res.status(404).json({error:'Not found'});
}).listen(process.env.PORT||3000,()=>console.log('http://localhost:'+(process.env.PORT||3000)));
