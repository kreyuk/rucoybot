const { fetchJson} = require('../lib/myfunc')
let handler = async (m, { args, usedPrefix, text, command }) => { 
let nk = await fetchJson(`https://raw.githubusercontent.com/kreyuk/jsonku/main/app.json.bak`)

if(!text) return m.reply(nk)
}
handler.command = /^scammer?$/i
handler.limit = true

handler.fail = null

module.exports = handler

