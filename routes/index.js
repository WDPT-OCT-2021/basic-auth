const router = require('express').Router();
const isLoggedIn = require('../middleware/isLoggedIn');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/profile', isLoggedIn, (req, res, next) => {
  res.render('profile', { name: req.user.username });
});

module.exports = router;
