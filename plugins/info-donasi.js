import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?
*PAYMENT ↓*
_*Pulsa/(Indosat):*_ 085691686671
_*Dana/ovo:*_ 085691686671
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://www.instagram.com/sih_bot', 'ɪɴꜱᴛᴀɢʀᴀᴍ', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
