const config = require('../config');
const { exec } = require('child_process');
const { cmd, commands } = require('../command');

//-----------------------------------------------Leave Group-----------------------------------------------

cmd({
    pattern: "leavegc",
    desc: "Make the bot leave the group.",
    category: "owner",
    react: "👤",
    filename: __filename
},
async (conn, mek, m, {
    from, reply
}) => {
    try {
        if(!isOwner) return //check owner
        await conn.groupLeave(from);
        return await conn.sendMessage(from, {
            text: "Bot has left the group."
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        return reply(`Error: ${e.message}`);
    }
});

//-----------------------------------------------Set Bio Of Bot-----------------------------------------------

cmd({
    pattern: "setbio",
    desc: "Set bot's profile bio.",
    react: "👤",
    use: '.setbio <New Bio>',
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, args, reply
}) => {
    try {
        if (from !== config.ownerNumber || !config.BotNumber) return reply('You are not authorized to use this command.');

        if (args.length === 0) return reply('Please provide a bio text.');
        const bio = args.join(' ');
        await conn.updateProfileStatus(bio);
        return await reply('Profile bio updated successfully.');
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        return reply(`Error: ${e.message}`);
    }
});

cmd({
    pattern: "join",
    desc: "joins group by link",
    react: "👥",
    category: "owner",
    use: '<group link.>',
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
try{  
    if(!isOwner) return //check owner
    if (!q) return reply('Please give me Group Link');
    if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
       reply("Link Invalid, Please Send a valid whatsapp Group Link!");
    let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    await conn.groupAcceptInvite(result)
        .then((res) => reply("🟩Joined Group"))
        .catch((err) => reply("Error in Joining Group"));
} catch (e) {
    await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
reply('Error !!')
l(e)
}
})

//-----------------------------------------------Shut Down Bot-----------------------------------------------
cmd({
    pattern: "shutdown",
    desc: "Shutdown the bot.",
    category: "owner",
    react: "🛑",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("You are not the owner!");
    reply("🛑 Shutting down...").then(() => process.exit());
});

//Broadcast Message to All Groups
cmd({
    pattern: "broadcast",
    desc: "Broadcast a message to all groups.",
    category: "owner",
    react: "📢",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, args, reply }) => {
    if (!isOwner) return reply("You are not the owner!");
    if (args.length === 0) return reply("📢 Please Provide The Message");

    const message = args.join(' ');
    const groups = Object.keys(await conn.groupFetchAllParticipating());

    for (const groupId of groups) {
        await conn.sendMessage(groupId, { text: message }, { quoted: mek });
    }

    reply("📢 Message Sent For All");
});

//Set Profile Picture
cmd({
    pattern: "setpp",
    desc: "Set bot profile picture.",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("You are not the owner!");
    if (!quoted || !quoted.message.imageMessage) return reply("Please Reply With An Image");

    try {
        const media = await conn.downloadMediaMessage(quoted);
        await conn.updateProfilePicture(conn.user.jid, { url: media });
        reply("🖼️ Updated Succcessfully");
    } catch (error) {
        reply(`❌ Error ${error.message}`);
    }
});

//Block User
cmd({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("You are not the owner!");
    if (!quoted) return reply("Please Reply With A User");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'block');
        reply(`🚫 User ${user} Blocked Succcessfully.`);
    } catch (error) {
        reply(`❌ Error: ${error.message}`);
    }
});

//Unblock User
cmd({
    pattern: "unblock",
    desc: "Unblock a user.",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("You are not the owner!");
    if (!quoted) return reply("Please Reply With A User");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'unblock');
        reply(`✅ User ${user} Unblocked Succcessfully.`);
    } catch (error) {
        reply(`❌ Error ${error.message}`);
    }
});

//Clear All Chats
cmd({
    pattern: "clearchats",
    desc: "Clear all chats from the bot.",
    category: "owner",
    react: "🧹",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("You are not the owner!");
    try {
        const chats = conn.chats.all();
        for (const chat of chats) {
            await conn.modifyChat(chat.jid, 'delete');
        }
        reply("🧹 Cleared All Chats Succcessfully.");
    } catch (error) {
        reply(`❌ Error: ${error.message}`);
    }
});

