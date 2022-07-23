import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, 'TEST ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://wa.me/6285691686671', 'WA', null, null, [
[`tes`, '.tes'],
], m, {asLocation: true})
}
handler.help = ['.tes']
handler.tags = ['general']
handler.customPrefix = /^(tes|.tes)$/i
handler.command = new RegExp

export default handler
