var express = require('express');
var router = express.Router();

/* POST apis listing. */
router.post('/', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-api-tran-id', req.get('x-api-tran-id'));
  res.charset = 'utf-8';
  
  res.json({rsp_code:"40403",rsp_msg:"탈회 자산 입니다."});
});

module.exports = router;
