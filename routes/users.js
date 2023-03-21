var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/api/auth/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// User authentication:
//     POST /api/auth/login: Allows users to login with their credentials and receive an access token.
//     POST /api/auth/register: Allows users to register with their credentials and create a new account.