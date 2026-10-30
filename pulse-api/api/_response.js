module.exports = function response(req,res,data){
 res.setHeader('Content-Type','application/json; charset=utf-8');
 res.setHeader('Cache-Control','public, max-age=120');
 if(req.method !== 'GET'){
  res.setHeader('Allow','GET');
  return res.status(405).json({error:'Method not allowed'});
 }
 return res.status(200).json(data);
};
