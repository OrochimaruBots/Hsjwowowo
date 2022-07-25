import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `https://youtube.com/channel/UCeSakfEaWwtzyrpnkk5_VVA\nSubscribe Untuk Mengetahui Update Selanjutnya:https://www.instagram.com/sih_bot\nSilahkan follow Instagram saya dibawah ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'Thanks','Bilek', ftextt, m)
}
handler.command = handler.help = ['sac']
handler.tags = ['info']

export default handler
