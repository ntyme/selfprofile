const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ImageInfo = new Schema({
    name: {type: String},
    fileUrl: {type: String},
    description: {type: String}
})

ImageInfo.set('collection', 'data');
ImageModel = mongoose.model('data', ImageInfo);
module.exports = ImageModel;