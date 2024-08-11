const mongoose = require('mongoose');


const severitySchema = new mongoose.Schema({
  severity: {
    type: Number,    
    required: true,  
    min: 1,          
    max: 10          
  }
});

const Severity = mongoose.model('Severity', severitySchema);

module.exports = Severity;
