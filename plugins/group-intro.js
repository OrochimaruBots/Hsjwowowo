import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {


let krtu = `Member baru intro
Nama Panjang:
Nama Panggilan:
Umur:
Kelas:
Asal:
Tanggal lahir:
Temptation lahir:
Tahun lahir:
Bulan lahir:
Nama ayah:
Nama ibu:
Nama kakak:
Nama adek:
Nama kakek:
Nama nenek:
Nama paman:
Nama bibi:
Nama sepupu:
Tinggi badan:
Berat badan:
Ukuran sepatu:
Ukuran baju:
Ukuran sandal:
Warna kesukaan:
Makanan favorit:
Minuman favorit:
Emoji favorit:
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
