var express = require('express');
var router = express.Router();

// /oauth/2.0/revoke
router.post('/revoke', function(req, res, next) {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-api-tran-id', req.get('x-api-tran-id'));
  res.charset = 'utf-8';
  
  res.json({rsp_code:"00000",rsp_msg:"REVOKE TEST"});
});

module.exports = router;
