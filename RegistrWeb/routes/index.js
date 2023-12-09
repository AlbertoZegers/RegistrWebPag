var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.useragent);
  let dic = req.useragent;
  res.render('index', { title: 'RegistrAPP', link: '/descarga', usuario: dic.platform });
});

router.get('/descarga', function(req, res){
  res.download(__dirname+'/RegistrAPP.apk', function(err){
    if(err){
      console.log(err);
    } else {
      console.log("Descargando...");
    }
  })
})

module.exports = router;
