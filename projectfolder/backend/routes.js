const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const config = require('../src/config');
const DOCUMENT = require('../src/ImageModel');
const creds = require('../src/getprofile');
const model = require('../src/ImageModel');
const unirest = require('unirest');
const axios = require('axios');

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
            var newFileUploaded = {
                name: req.body.name,
                about: req.body.about,
                fileLink: url + file.originalname,
                s3_key: params.Key,
            };
            var document = new DOCUMENT(newFileUploaded);
            console.log(document);
            document.save().then(result => { res.status(200).send("Thank you") }).catch(err => { alert(err); res.status(400).send("Something went wrong") })
        }
    });
});
router.get('/', (req, res) => {
    DOCUMENT.find({}, (err, info) => {
        if (err){console.log(err);res.status(500).send(err)}
        if (!info.length){return res.status(404).send("NOTHING FOUND")}
        return res.status(200).json({data: info})
    }).catch(err => {console.log(err)})
})

module.exports = router;
