const uploadImage = require('../lib/uploadImage')
const ocrapi = require("ocr-space-api-wrapper")
  handler = async (m, { conn, text, args }) => {
  let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
           
    if (!mime) throw `balas gambar dengan perintah .removebg`
                   if (!/image\/(jpe?g|png)/.test(mime)) throw `_*jenis ${mime} tidak didukung!*_`
           conn.reply('Tunggu sebentar')
                     let img = await q.download()
    let url = await uploadImage(img)          
                    await conn.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/photoeditor/removebg?url=${url}&apikey=zenzkey_d928ce4e47d5` }, caption: 'done' }, { quoted: m})
                    }
handler.help = ['limit'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(removebg)$/i

module.exports = handler



