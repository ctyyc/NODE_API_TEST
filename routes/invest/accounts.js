var express = require('express');
var router = express.Router();

// IV01
router.get('/', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-api-tran-id', req.get('x-api-tran-id'));
  res.charset = 'utf-8';
  
  res.json({rsp_code:"40403",rsp_msg:"탈회 자산 입니다."});
});

// IV02
router.post('/basic', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-api-tran-id', req.get('x-api-tran-id'));
  res.charset = 'utf-8';
  
  res.json({rsp_code:"40403",rsp_msg:"탈회 자산 입니다."});
});

// IV03
router.post('/transactions', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-api-tran-id', req.get('x-api-tran-id'));
  res.charset = 'utf-8';
  
  res.json({rsp_code:"40403",rsp_msg:"탈회 자산 입니다."});
});

// IV04
router.post('/products', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-api-tran-id', req.get('x-api-tran-id'));
  res.charset = 'utf-8';
  
  res.json({rsp_code:"40403",rsp_msg:"탈회 자산 입니다."});
});

// IV05
router.post('/pension', function(req, res, next) {
  res.status(404);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('x-api-tran-id', req.get('x-api-tran-id'));
  res.charset = 'utf-8';
  
  res.json({rsp_code:"40403",rsp_msg:"탈회 자산 입니다."});
});

module.exports = router;
