const mongoose = require('mongoose');

const envVarSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    value: { type: String, required: true }
});

// News Groups
const activeGroupSchema = new mongoose.Schema({
    groupId: { type: String, required: true, unique: true },
    lastNewsTitles: { type: [String], default: [] },
});

const ActiveGroup = mongoose.model('ActiveGroup', activeGroupSchema);
const EnvVar = mongoose.model('EnvVar', envVarSchema);

module.exports = EnvVar,ActiveGroup;