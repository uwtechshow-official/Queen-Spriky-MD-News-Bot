const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '6I8H2SKI#-dyEFbyJ6nAmq9RRO4qlLwgwZrgf_MppFnaNq8I1SB4', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://spriky:1234@cluster0.sx9pb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94758900210',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94773366833'    // Enter Your Bot Number
};