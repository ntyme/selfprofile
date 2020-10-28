const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post('/upload', multer.upload("file"), (req, res) => {
    const file = req.file;
    const url = 1;

})

router.get('/display', (req, res) => {

})

module.exports = router;