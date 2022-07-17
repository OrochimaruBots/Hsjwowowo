import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {


let krtu = `Member baru intro
Nama Panjang:
Nama Panggilan:
Umur:
Kelas:
Gender:
Asal:
Tanggal lahir:
Tempat lahir:
Tahun lahir:
Bulan lahir:
Agama:
Nama ejekan:
nama samaran:
hari lahir:
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
Hewan kesayangan:
Nama hewan peliharaan:
alamat rumah:
orang yang disukai:
mantan tersayang:
pernah ngegay/ngelesby?:
nama sekolah:
guru terbaik di sekolah:
guru ternakal di sekolah:
nama kelas:
nama wali kelas:
nama teman dekat:
nama sahabat:
punya berapa sahabat:
ukuran baju:
warna cas hp:
warna softcase hp:
merk hp:
negara yang ingin di kunjungi:
film favorit:
anime favorit:
Husbu favorit:
waifu favorit:
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
