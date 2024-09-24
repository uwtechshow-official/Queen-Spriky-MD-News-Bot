const { cmd } = require('../command');
const config = require('../config');

// AutoBIO feature variables
let autoBioInterval;

// Set AutoBIO
cmd({
    pattern: "setautobio",
    desc: "Enable or disable the AutoBIO feature.",
    category: "owner",
    react: "🛠️",
    filename: __filename
}, async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");

    config.autoBioEnabled = !config.autoBioEnabled;

    if (config.autoBioEnabled) {
        reply("🛠️ AutoBIO feature has been *enabled*! 🔄");
        startAutoBio(conn);
    } else {
        reply("🛠️ AutoBIO feature has been *disabled*! 🚫");
        stopAutoBio();
    }
});

// Start AutoBIO
function startAutoBio(conn) {
    if (autoBioInterval) clearInterval(autoBioInterval);
    autoBioInterval = setInterval(async () => {
        const time = new Date().toLocaleTimeString();
        const bioText = `🌟 Queen Spriky MD 🌟`; 
        await conn.updateProfileStatus(bioText);
    }, 60 * 1000);
}

//Stop AutoBIO
function stopAutoBio() {
    if (autoBioInterval) {
        clearInterval(autoBioInterval);
        autoBioInterval = null;
        console.log("🛠️ AutoBIO feature stopped.");
    }
          }