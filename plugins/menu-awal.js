import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `SELAMAT DATANG DI BOT SAYA! KAMI ADALAH BOT ZINGFO, SEDIA MEMBANTUMU SAAT ADA MASALAH :D

(btw .level untuk mengecek/levelup kan levelmu)_\n`,wm + '\n\n' + botdate, giflogo, [['GRUP','.gcbot'],['LIST MENU','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler
