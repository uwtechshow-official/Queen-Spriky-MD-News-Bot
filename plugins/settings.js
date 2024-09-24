const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const EnvVar = require('../lib/mongodbenv');

cmd({
    pattern: "settings",
    alias: ["setting","s"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;

        const config = await readEnv();

        let work;
        switch (config.MODE) {
            case 'public':
                work = '𝙿𝚄𝙱𝙻𝙸𝙲🌎';
                break;
            case 'private':
                work = '𝙿𝚁𝙸𝚅𝙰𝚃𝙴👤';
                break;
            case 'groups':
                work = '𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈👥';
                break;
            case 'inbox':
                work = '𝙸𝙽𝙱𝙾𝚇 𝙾𝙽𝙻𝚈🫂';
                break;
            default:
                work = '𝚄𝙽𝙺𝙾𝚆𝙽🛑';
        }

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoreact = config.AUTO_REACT === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Settings.jpg?raw=true' },
            caption: `Queen Spriky MD Settings\n
┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮
┣┣Work Mode : *${work}*
┣┣Auto Status : *${autoStatus}*
┣┣Auto React : *${autoreact}*
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛
> 🔗𝘾𝙐𝙎𝙏𝙊𝙈𝙄𝙕𝙀  𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝗦🔗⤵️

┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮

*_WORK TYPE_⤵️*
┣┣1.1 PUBLIC WORK
┣┣1.2 PRIVATE WORK
┣┣1.3 GROUP ONLY
┣┣1.4 INBOX ONLY

*_AUTO STATUS SEEN_⤵️*
┣┣3.1 AUTO READ STATUS ON
┣┣3.2 AUTO READ STATUS OFF

*_AUTO REACT_⤵️*
┣┣4.1 AUTO REACT ON
┣┣4.2 AUTO REACT OFF

*_AUTO BIO_⤵️*
┣┣6 AUTO BIO ON/OFF

*_24/7 News Service_⤵️*
┣┣7 Activate News Service
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛`
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        if (!isOwner) return;
                        reply('.update MODE:public');
                        reply('.restart');
                        break;
                    case '1.2':
                        if (!isOwner) return;
                        reply('.update MODE:private');
                        reply('.restart');
                        break;
                    case '1.3':
                        if (!isOwner) return;
                        reply('.update MODE:groups');
                        reply('.restart');
                        break;
                    case '1.4':
                        if (!isOwner) return;
                        reply('.update MODE:inbox');
                        reply('.restart');
                        break;
                    case '2.1':
                        if (!isOwner) return;
                        reply('.update AUTO_VOICE:true');
                        break;
                    case '2.2':
                        if (!isOwner) return;
                        reply('.update AUTO_VOICE:false');
                        break;
                    case '3.1':
                        if (!isOwner) return;
                        reply('.update AUTO_READ_STATUS:true');
                        break;
                    case '3.2':
                        if (!isOwner) return;
                        reply('.update AUTO_READ_STATUS:false');
                        break;
                    case '4.1':
                        if (!isOwner) return;
                        reply('.update AUTO_REACT:true');
                        break;
                    case '4.2':
                        if (!isOwner) return;
                        reply('.update AUTO_REACT:false');
                        break;
                    case '5.1':
                        if (!isOwner) return;
                        reply('.update AI_CHAT_BOT:true');
                        break;
                    case '5.2':
                        if (!isOwner) return;
                        reply('.update AI_CHAT_BOT:false');
                        break;
                    case '6':
                        if (!isOwner) return;
                        reply('.setautobio');
                        break;    
                    case '7':
                        if (!isOwner) return;
                        reply('.sprikynews');
                        break;    
                        sprikynes
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});