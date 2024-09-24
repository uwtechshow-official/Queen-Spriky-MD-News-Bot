const config = require('../config')
const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')
const os = require("os")
const {runtime} = require('../lib/functions')

//-----------------------------------------------Alive-----------------------------------------------
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "general",
    react: "❤️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url:'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Bot.jpg?raw=true'},caption: 'Hey!\n*Queen Spriky WhatsApp Bot Is Alive*\nType *.menu* To See All Commands.\n\nJoin Our WhatsApp Group\n\nhttps://chat.whatsapp.com/Jx2dvOAzNaO3vm5bwVglyC'},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//-----------------------------------------------Restart Bot-----------------------------------------------
cmd({
    pattern: "restart",
    desc: "restart the bot",
    react: "🔄",
    category: "general",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return //check owner
const {exec} = require("child_process")
reply("Bot Restarting...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
}
})

//-----------------------------------------------Menu-----------------------------------------------

cmd({
    pattern: "menu",
    desc: "Show list of available commands.",
    category: "general",
    react: "🧸",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        const config = await readEnv();
        let menu = {
            general: '',
            download: '',
            group: '',
            owner: '',
            search: '',
            ai: '',
            games: '',
            tools: '',
            random: '',
            news: '',
        };

        // Populating the menu with commands and their descriptions
        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `*Command:* ${config.PREFIX}${commands[i].pattern}\n*Description:* ${commands[i].desc || 'No description available'}\n*Use:* ${commands[i].use || 'Just type the command'}\n\n`;
            }
        }

        let madeMenu = `🌟 *Hello ${pushname}, Welcome to Queen Spriky Bot!* 👋

🤖 *Bot Name:* Queen Spriky Bot  
👤 *Owner Name:* Udavin Wijesundara  
🔖 *Prefix:* ${config.PREFIX}  
⏱️ *Uptime:* ${runtime(process.uptime())}  
💾 *RAM Usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB  
🖥️ *Host Name:* ${os.hostname()}

═════════════════════════

🌐 *GENERAL COMMANDS* 🌐

${menu.general}

👑 *OWNER COMMANDS* 👑

${menu.owner}

📰 *News COMMANDS* 📰

${menu.news}


═════════════════════════

🌹 *Thank you for using Queen Spriky WhatsApp Bot!*🌹

> 👨‍💻 *Developer:* Udavin Wijesundara
`;

        await conn.sendMessage(from, { image: { url: "https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Menu.jpg?raw=true" }, caption: madeMenu }, { quoted: mek });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply(`${e}`);
    }
});
//-----------------------------------------------System-----------------------------------------------
cmd({
    pattern: "system",
    alias: ["status", "botinfo", "host"],
    desc: "Check uptime, memory, cpu, platform and more.",
    category: "general",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let status = `*Uptime:* ${runtime(process.uptime())}
*Ram usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*HostName:* ${os.hostname()}
*Developer:* Udavin Wijesundara
`;

        return reply(status);
    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        await reply(`❌ An error occurred: ${e.message}`);
    }
});

//Delete Message

cmd({
    pattern: "del",
    desc: "delete message",
    react: "🗑️",
    category: "main",
    use: '.del',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const key = {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.quoted.id,
                    participant: m.quoted.sender
                }
                await conn.sendMessage(m.chat, { delete: key })
                await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
} catch (e) {
    await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
reply('Error !!')
l(e)
}
})

//Jid
cmd({
    pattern: "jid",
    desc: "Get the JID of the current chat",
    react: "🆔",
    category: "main",
    use: '.jid',
    filename: __filename
},
async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const chatJid = from;
        reply(`${chatJid}`);
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
    } catch (e) {
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('Error while retrieving the JID!');
        l(e);
    }
});

//About
cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "😸",

    category: "general",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

    try{
        let about = ` *👋🐼 Hello ${pushname}*
                    
I am Queen Spriky MD WhatsApp Bot
Developed By Udavin`

    return await conn.sendMessage(from,{image: {url:`https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Owner.jpg?raw=true`},caption:about},{quoted: mek})
    }catch(e){
    console.log(e)
    reply(`${e}`)
}
})

//OWNER

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "💁‍♂️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: UDAVIN*
*⚡ɴᴜᴍʙᴇʀ* -: 94758900210*
`
await conn.sendMessage(from,{image:{url: `https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Owner.jpg?raw=true`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//Ping

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*Pinging...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*📍 Ping : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

🔗 📍REPO LINK ❤️‍🔥👇

https://github.com/uwtechshow-official/Queen-Spriky-MD

📺 Please Subscribe to My YouTube Channel:

https://www.youtube.com/@uwtechshow

📡 Follow My Official WhatsApp Channel:

https://whatsapp.com/channel/0029VajvrA2ATRSkEnZwMQ0p

✨ *Queen Spriky MD by Udavin*
`
await conn.sendMessage(from,{image:{url: `https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Script.jpg?raw=true`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


