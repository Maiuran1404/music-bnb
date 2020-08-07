const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    position: String,
    name: String,
    company: String,
    date: Date
});

const Topic = mongoose.model('Topic', TopicSchema);


module.exports = Topic;