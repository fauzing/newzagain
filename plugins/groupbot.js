let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `šš¢šš” šš šš„šØš£ š¢ššššššš šš¢š§*\n\n\nāāāāā`,
	rows: [
	    {title: 'š£ Group ', description: "Main di grup gw yuk!", rowId:".gcbot"}
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "š Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler
