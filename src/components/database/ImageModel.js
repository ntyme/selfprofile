const mongoose = require('mongoose');

let ImageInfo = new mongoose.Schema({
    name: {type: String},
    fileUrl: {type: String},
    description: {type: String}
});

ImageInfo.set('collection', 'data');
const ImageModel = mongoose.model('data', ImageInfo);
module.exports = ImageModel;