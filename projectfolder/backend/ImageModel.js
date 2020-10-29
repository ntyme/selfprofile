const mongoose = require('mongoose');
const AutoIncrement = require("mongoose-sequence")(mongoose);

let ImageInfo = new mongoose.Schema({
    name: {type: String },
    about: {type: String},
    description: { type: String },
    fileLink: { type: String },
    s3_key: { type: String },
});
ImageInfo.set('collection', 'data');
const ImageModel = mongoose.model('data', ImageInfo);
module.exports = ImageModel;