let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/c98503d281e1e251211a0.jpg', m, { packname: "Chika Bot", author: "𝙕𝙞𝙭𝙮.𝙚𝘼𝙨𝙥𝙊𝙧𝙏.𝙭𝙭𝙭" })
}

handler.customPrefix = /^(turu)$/i
handler.command = new RegExp

module.exports = handler
