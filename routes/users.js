var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', (req, res, next) => {
  res.json({mssg: "POST request to login"});
});

router.post('/register', (req, res,next) => {
  res.json({mssg: "POST request to register"})
})

module.exports = router;

// User authentication:
//     POST /api/auth/login: Allows users to login with their credentials and receive an access token.
//     POST /api/auth/register: Allows users to register with their credentials and create a new account.