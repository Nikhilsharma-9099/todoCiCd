const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    completedAt: {
        type: Date
    }
})

module.exports = mongoose.model('Todo', todoSchema);