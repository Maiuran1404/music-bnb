const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    note: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const SubtopicSchema = mongoose.Schema({
    subtopicTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: [NoteSchema],
})

const TopicNoteSchema = mongoose.Schema({
    topicTitle: {
        type: String,
        required: true
    },    
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: [NoteSchema],
    subtopics: [SubtopicSchema],
});


const Note = mongoose.model('Note', TopicNoteSchema);
module.exports = Note;

// module.exports = mongoose.model('TopicNote', TopicNoteSchema);

