let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '20'
let sp = '35'
let sv = '40'
//premium
let ph = '5'
let pn = '15'
let pp = '25'
let pv = '35'
let ppm = '35'
//jasa run
let ri = '25'
let pk = '30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _25000💹/grup (7 Hari)_
┊⫹⫺ *Normal:* _350000💹/grup (1 bulan)_                                         
┊⫹⫺ *permanen:* = _1000000💹/grup (unlimited)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _50000💹 (7 Hari)_
┊⫹⫺ *Normal:* _200000💹 (1 bulan)_                                       
┊⫹⫺ *Permanent:* = _2000000💹 (Unlimited)_
╰═┅═━––––––๑

༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *DLL*

_Total Fitur:_ 570++
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* 5K • Sewa', description: 'PRICE: ' + sh + 'k (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* 10K • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* 40K • Sewa', description: 'PRICE: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 5K • Premium', description: 'PRICE: ' + ph + 'k (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 10K • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* 35K • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    }, {
        title: `${htjava} JASA RUN ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 25K • Jasarun', description: 'PRICE: ' + ri + 'k (25 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 30K • Jasarun', description: 'PRICE: ' + pk + 'k (1 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
