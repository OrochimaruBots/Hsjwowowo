let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/44c08e07a1c81411d5a69.jpg', m, { packname: "Chika Bot", author: "𝙕𝙞𝙭𝙮.𝙚𝘼𝙨𝙥𝙊𝙧𝙏.𝙭𝙭𝙭" })
}

handler.customPrefix = /^(😭|😭😭|😭😭😭|😭😭😭😭|😭😭😭😭😭|😭😭😭😭😭😭)$/i
handler.command = new RegExp

module.exports = handler
