var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/siteplan', function(req, res, next){
    res.render('siteplan');
});

router.get('/vista31', function(req, res, next){
    res.render('vista31');
});

router.get('/vista32', function(req, res, next){
    res.render('vista32');
});

router.get('/vista11', function(req, res, next){
    res.render('vista11');
});

router.get('/vista21', function(req, res, next){
    res.render('vista21');
});

router.get('/neighborhood', function(req, res, next){
    res.render('neighborhood');
});

module.exports = router;
