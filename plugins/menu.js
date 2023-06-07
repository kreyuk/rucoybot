const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
// Membuat objek Date dengan tanggal dan waktu saat ini
const tanggalSekarang = new Date();

// Mendapatkan informasi tanggal dan waktu
const tanggal = tanggalSekarang.getDate();
const bulan = tanggalSekarang.getMonth() + 1; // Perhatikan: bulan dimulai dari 0, sehingga perlu ditambah 1
const tahun = tanggalSekarang.getFullYear();
const moment = require('moment-timezone')
const harii = moment.tz('Asia/Jakarta').format('dddd')

let handler = async (m, { args, usedPrefix, text, command }) => {

if( harii == 'Friday') {
let menunya =`

━━━ *Rucoy-Bot* ━━━

_Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja._

 *MENU UTAMA*
 .nick
 .news
 .kalkulasi
 .hightscore
 .guild
 .scammer
 `
 conn.sendMessage(m.chat, { text: menunya}, {quoted:m })
} else {

	let menunya = `
━━━ *Rucoy-Bot* ━━━

 *MENU UTAMA*
 .nick
 .news
 .kalkulasi
 .hightscore
 .guild
 .scammer
`
conn.sendMessage(m.chat, { text: menunya}, {quoted:m })
}
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.exp = 3

module.exports = handler
