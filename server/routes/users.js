const express = require('express')
const app = express()
const router = express.Router();
const mdb = require('../db/users');

router.get('/', function(req, res) {
    mdb.getAllUers((err, data) => {
        console.log(data)
        res.json(data)
      })    
});
router.post('/', function(req, res) {
    console.log(req.body)
    var user = req.body;
    mdb.addNewUser(user,(err, data) => {
        console.log(data)
        res.json(data)
      })
    
});

module.exports = router;