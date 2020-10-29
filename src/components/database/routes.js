const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const config = require('./config');
const DOCUMENT = require('../database/ImageModel');

router.post('/upload', upload.single("file"), (req, res) => {
    const file = req.file;
    const url = config.AWS_LINK;
    let s3Bucket = new AWS.S3({
        accessKeyId: config.AWS_ACCESS_KEY,
        secretAccessKey: config.AWS_SECRET_KEY,
        region: config.AWS_REGION
    })
    var params = {
        Bucket: config.AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
    };
    s3Bucket.upload(params, function (err, data) {
        if (err) {
            res.status(500).json({ error: true, Message: err });
        } else {
            res.send({ data });
            var newFileUploaded = {
                description: req.body.description,
                fileLink: url + file.originalname,
                s3_key: params.Key
            };
            var document = new DOCUMENT(newFileUploaded);
            document.save(function (error, newFile) {
                if (error) {
                    throw error;
                }
            });
        }
    });
});

//db post
router.post('/http://localhost:4000/DatabaseSubmit', (req, res) => {
    let newEntry = new DOCUMENT({
        fileUrl: req.file,
        description: req.description,
        name: req.name        
    })
    newEntry
        .save()
        .then(entry => {alert("Document Added")}).catch(err=> alert(err))

})


router.get('/display', (req, res) => {

})

module.exports = router;