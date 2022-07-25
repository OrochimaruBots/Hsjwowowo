let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/79993055034ad06052222.png', m, { packname: "Chika Bot", author: "𝙕𝙞𝙭𝙮.𝙚𝘼𝙨𝙥𝙊𝙧𝙏.𝙭𝙭𝙭" })
}

handler.customPrefix = /^(makasih|terimakasih|thank|thanks|thanks you)$/i
handler.command = new RegExp

module.exports = handler
