const http=require('node:http');const fs=require('node:fs');const path=require('node:path');const handler=require('./api/index');
const app=fs.readFileSync(path.join(__dirname,'public','index.html'));
const server=http.createServer((req,res)=>{
 if(req.url==='/'||req.url==='/index.html'){res.setHeader('Content-Type','text/html; charset=utf-8');return res.end(app);}
 return handler(req,res);
});
server.listen(process.env.PORT||3000,()=>console.log('Pulse disponible en http://localhost:'+(process.env.PORT||3000)));
