let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f4ff2dcf458c7b871dd4e.png', m, { packname: "Chika Bot", author: "𝙕𝙞𝙭𝙮.𝙚𝘼𝙨𝙥𝙊𝙧𝙏.𝙭𝙭𝙭" })
}

handler.customPrefix = /^(nice)$/i
handler.command = new RegExp

module.exports = handler
