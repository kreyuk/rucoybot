// Membuat objek Date dengan tanggal dan waktu saat ini
const tanggalSekarang = new Date();

// Mendapatkan informasi tanggal dan waktu
const tanggal = tanggalSekarang.getDate();
const bulan = tanggalSekarang.getMonth() + 1; // Perhatikan: bulan dimulai dari 0, sehingga perlu ditambah 1
const tahun = tanggalSekarang.getFullYear();
let hs = `Hightscore
-experience
-melee
-distance
-magic

*Contoh:* .hightscore experience`
let score = ' ';
let handler = async (m, { args, usedPrefix, text, command }) => { 
if(!text) return m.reply(hs)
if(text == 'experience') {
let nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/experience/${tahun}/${bulan - 1}`)
let capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
} else if ( text == 'melee' ) {
let nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/melee/${tahun}/${bulan - 1}`)
let capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
} else if ( text == 'distance' ) {
let nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/distance/${tahun}/${bulan - 1}`)
let capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
} else if( text == 'magic' ) {
 let nk = await (`https://image.thum.io/get/width/1200/noanimate/https://www.rucoyonline.com/highscores/magic/${tahun}/${bulan - 1}`)
let capt = (` *Hightscore:* ${text} `)
conn.sendMessage(m.chat,{image:{url: nk}, caption:capt}, {quoted:m })
 } else { return m.reply(`hightscore ${text} tidak ada`)}
 }
 

handler.command = /^hightscore?$/i
handler.limit = true

handler.fail = null

module.exports = handler

