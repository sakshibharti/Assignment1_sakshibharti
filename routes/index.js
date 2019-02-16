let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Home' });
});

router.post('/',(req, res, next)=>{
  console.log(req.body);  
  res.render('index', { title: 'Home' });
});
router.post('/index',(req, res, next)=>{
  console.log(req.body);
});
router.get('/about', (req, res, next)=> {
  res.render('index', { title: 'About' });
});

router.get('/projects', (req, res, next)=> {
  res.render('index', { title: 'Projects' });
});

router.get('/services', (req, res, next)=> {
  res.render('index', { title: 'Services' });
});

router.get('/contactme', (req, res, next)=> {
  res.render('index', { title: 'ContactMe' });
});

module.exports = router;
