/*
   * Create By 𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩ priv
   * Contactame en Wa wa.me/593991398786
   * Follow https://github.com/CarlosTwT
   * Gracias a Hisoka por la base!
   * Este script es completamente *GRATIS* se precavido de los estafadores.
   * Si intentas comercializar este script podrías tener problemas legales!   
*/


require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const stalker = require("xzons-api")
const hx = require("hxz-api");
const ra = require("ra-api")
const { tiktokdl } = require('@bochilteam/scraper') 
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

let { msgFilter } = require('./src/nospam.js')

// Lectura de database
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []
//Database


//anti virtual
		if (m.sender.startsWith('212')) return crls.updateBlockStatus(m.sender, 'block')

//mensaje ban 
async function replybutton(teks) {
                       const buttonsDefault = [{ callButton: { displayText: `Mi Owner`, url : `+593991398786` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© BANNED BOT", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return crls.sendMessage(from, buttonMessage)
                }

module.exports = crls = async (crls, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefijo ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefijo ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const from = mek.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await crls.decodeJid(crls.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)


if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
  console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
  return reply('〔espera 5 segundos para usar otro comando〕')}

//PP USER
		try {
        ppuser = await crls.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
        ppnyauser = await getBuffer(ppuser)
//FIN
//viewOnceMessage
		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Mensaje* 」
    
    *• Nombre* : ${pushname}
    *• User* : @${m.sender.split("@")[0]}
    *• reloj* : ${moment.tz('America/Guayaquil').format('HH:mm:ss')}
    
     *Tipo de mensaje* : ${m.mtype}`

			m.reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: m
			}).catch(_ => reply('Tal vez ha sido abierto por un bot'))
		}

// DISCURSO DE TIEMPO
const time = moment.tz('Amercia/Guayaquil').format('HH:mm:ss')
// FECHA
var dias = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var meses = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hrs = tgel.getDate();
var mdias = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = meses[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const fechasm = (hrs + '' + dias[mdias] + '' + syear)
const janghar = (thisDaye)     
   	
        // Grupo
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await crls.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
        const time2 = moment().tz('America/Guayaquil').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var timebro = 'Buenas noches 🏙️'
}
        if(time2 < "19:00:00"){
        var timebro = 'Buenas noches 🌆'
}
        if(time2 < "18:00:00"){
        var timebro = 'Buenas tardes 🌇'
}
        if(time2 < "15:00:00"){
        var timebro = 'Linda Tarde 🌤️'
}
        if(time2 < "10:00:00"){
        var timebro = 'Buenos días 🌄'
}
        if(time2 < "05:00:00"){
        var timebro = 'Buen día 🌆'
}
        if(time2 < "03:00:00"){
        var timebro = 'Buenas noches 🌃'
}
		
	       //const verificado
        const replyvid = (teks) => {crls.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `Hola ${pushname}`,"body": global.ownername,"previewType": "PHOTO","thumbnail": thumb, "sourceUrl": global.myweb}}}, {quoted: m})}
	    const verificado = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 2022,status: 4, thumbnail: fs.readFileSync(`./verificado.jpg`) ,message: `Pedido : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}} }
	    const sticker = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 2022,status: 4, thumbnail: fs.readFileSync(`./verificado.jpg`) ,message: `Sticker by 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇`,surface: 100, sellerJid: "0@s.whatsapp.net"}} }    
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': verificado, thumbnail: verificado,sendEphemeral: true}} }
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '00001', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': verificado}} }
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: verificado}} }
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '2022', 'caption': `${pushname}`, 'jpegThumbnail': verificado}} }
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: verificado}} }
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': verificado}} }
        const st ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: verificado, surface: 200, message: `「By (𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩)」❤️`, orderTitle: '𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}


	    	//group target by Carlos\\
const reply = (teks) => {crls.sendMessage(from, { text: teks }, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Runtime : ${runtime(process.uptime())}` }}}  })}
        
        
        const replay = (teks) => {
            crls.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` PRESIONA AQUÍ⭐`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./fake.jpg`),"sourceUrl": "https://tiktok.com/@theprivmen"}}}, { quoted: m})
        }
        //Fin Reply

                //FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": thumb //La imagen
},
"title": "The CLRS+", //da tu nombre 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": thumb, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
crls.sendMessage(jid, order.message, { messageId: order.key.id})
}

//fakereply img
const fakecrls = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'Created By Crls',
      jpegThumbnail: thumb,
      viewOnce: true
    }
  }
}

// FAKE TEXT IMG
const textImg = (teks) => {
crls.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./media/botimg.jpg')}) 
}


if (command) {
await crls.sendPresenceUpdate('paused', m.chat)
}
//fin

//Add Hit 
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/BotMd/visits')
conteocmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/DaddyMD${moment.tz('America/Guayaquil').format('DDMMYYYY')}/visits`)
conteoscmds = `${dataa.value}`
}
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!crls.public) {
            if (!m.key.fromMe) return
        }

        // Enviar mensaje a la consola y lectura automática
        if (m.message) {
            crls.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ MSJ ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> En'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

	
	// restablecer el límite cada 12 horas
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Límite restablecido')
        }, {
            scheduled: true,
            timezone: "America/Guayaquil"
        })
      
          
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await crls.setStatus(`${crls.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	        
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nSe detectó que envío un enlace de grupo, lo siento, será expulsado !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await crls.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh lo siento no te eliminaré, porque enviaste este enlace es de este grupo`)
        if (isAdmins) return m.reply(`Ehh lo siento admin`)
        if (isCreator) return m.reply(`Ehh lo siento, eres mi dueño, no te eliminaré`)
        crls.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }


        // Respon Cmd con medios
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: crls.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, crls.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        crls.ev.emit('messages.upsert', msg)
        }
	    

//MATEMÁTICAS
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cuestionario de matemáticas  🎮\n\nRespuesta correcta 🎉\n\n¿Quieres volver a jugar? Enviar ${prefix}math +modo`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Respuesta equivocada!*')
        }

        //Suit PvP                    
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|aceptar|acepto|bueno?|rechazar|Noquiero|luego|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(rechazar|Noq|luego|nop|ga(k.)?bisa)/i.test(m.text)) {
	    crls.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rechaza el pvp, el pvp se cancela`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    
	    
	    		    let buttons9 = [
                        {buttonId: `piedra`, buttonText: {displayText: 'Piedra🪨' }, type: 2},
                        {buttonId: `papel`, buttonText: {displayText: 'Papel🧻' }, type: 2},
                        {buttonId: `tijera`, buttonText: {displayText: 'Tijera✂️' }, type: 2}
                    ]
                    
                    
	    crls.sendText(m.chat, `El desafío fue enviado a sus respectivos números 
@${roof.p.split`@`[0]} y 
@${roof.p2.split`@`[0]}
por favor entren a al chat mediante este link y escojan sabiamente"
Click aquí https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })


	    //if (!roof.pilih) crls.sendText(roof.p, `Por favor seleccione \n\nPiedra🗿\nPapel📄\nTijeras✂️`, buttons, m)
	    
	    
	    if (!roof.pilih) crls.sendButtonText(roof.p, buttons9, `Okey, Seleciona \n\nPiedra🗿\nPapel📄\nTijera✂`, `${footer}`, m)
	    
	    
	    //if (!roof.pilih2) crls.sendText(roof.p2, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂️`, buttons, m)
	    
	    
	    if (!roof.pilih2) crls.sendButtonText(roof.p2, buttons9, `Okey, Seleciona \n\nPiedra🗿\nPapel📄\nTijera✂`, `${footer}`, m)
	    
	    
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) crls.sendText(m.chat, `buff, los usuarios no tienen la intención de jugar,\nse canceló el desafío`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    crls.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} no elijas nada, fin del juego`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /tijera/i
	    let b = /piedra/i
	    let k = /papel/i
	    let reg = /^(tijera|piedra|papel)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih2 ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih2) crls.sendText(roof.p2, '_Tu oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Has elegido ${m.text} ${!roof.pilih ? `\n\nEsperando a que el oponente elija` : ''}`)
	    if (!roof.pilih) crls.sendText(roof.p, '_Tu oponente ha elegido_\nAhora es tu turno', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    crls.sendText(roof.asal, `_*Resultados del Desafío*_${tie ? '\nSERIE' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Ganó \n` : ` Perdió \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Ganó \n` : ` Perdió \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
no lo etiquetes!
Él está AFK ${reason ? 'Razón ' + reason : 'No contiene una razón'}
Durante ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
dejas de estar afk AFK${user.afkReason ? ' después ' + user.afkReason : ''}
estuviste afk Durante ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Ahora posee afk ${text ? ': ' + text : ''}`)
            }
            break		
            case 'suitpvp': case 'suit': {
                         if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let buttons8 = [
                 {buttonId: `aceptar`, buttonText: {displayText: 'Aceptar' }, type: 2},
                 {buttonId: `rechazar`, buttonText: {displayText: 'Rechazar' }, type: 2}
						   ]
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Completa tu suit anterior`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`no puedes jugar contigo mismo !`)
            if (!m.mentionedJid[0]) return m.reply(`_a quien quieres desafiar?_\nTag a la persona..\n\nEjemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) m.reply(m.chat, `la persona a la que estás desafiando está jugando con otra persona:(`, m)
            let id = 'suit_' + new Date() * 1
            let caption = `_*Sala de PvP*_
@${m.sender.split`@`[0]} Desafía a @${m.mentionedJid[0].split`@`[0]} a jugar una sala
Porfavor @${m.mentionedJid[0].split`@`[0]} escribe Aceptar/Rechazar`
            this.suit[id] = {
            chat: await crls.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
	        chat: await crls.sendButtonText(m.chat, buttons8, `aceptar/rechazar`, `${footer}`, m),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) crls.sendText(m.chat, `_acabó el tiempo_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            
            
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    crls.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    crls.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    crls.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    crls.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    crls.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    crls.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    crls.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            
//juegos            
            case 'mathpbs': case 'math': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endGLimit) // respuesta cuando se agota el límite
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Todavía hay sesiones sin terminar!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Modo: ${Object.keys(modes).join(' | ')}\nEjemplos de uso: ${prefix}math medio`
                let result = await genMath(text.toLowerCase())
                crls.sendText(m.chat, `*¿Cuál es el resultado de: ${result.soal.toLowerCase()}*?\n\nHora: ${(result.waktu / 1000).toFixed(2)} segundo`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Responder: " + result.jawaban)
                    reply("Tiempo de espera acabado\nRespuesta: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'pareja': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫tu pareja es

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, jawab, crls.user.name, floc, {mentions: ments})
            }
            break
            case 'amigos': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `creo que pueden ser muy buenos amigos ekisde🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, jawab, crls.user.name, fdoc, {mentions: menst})
            }
            break
            case 'califica':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
				if (!q) return reply(`Usar ${command} text\n\nEjemplo : ${command} mi foto`)
					const ra = ['0', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
crls.sendMessage(from, { text: `Calificando: ${q}\nLe pongo un: *${te}%*` }, { quoted: m })

					break
            case 'gay': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `he detectado que...
 @${jodoh.split('@')[0]} es gay🏳️‍🌈`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, jawab, crls.user.name, m, {mentions: ments})
            }
            break
case 'sitiosx':

      
if (!text) throw ` *Aqui están*😳 
*Usalos con moderación xd!*

1- www.xvideos.com
2- www.xhamster.com
3- www.xnxx.com
4- www.pornhub.com
5- www.redtube.com
6- www.youporn.com
7- www.snapdo.com
8- www.livejasmin.com
9- www.youjizz.com
10- www.tube8.com
11- www.dmm.co.jp
12- www.hardsextube.com
13- www.e-hentai.org
14- www.beeg.com `

      break
case 'miname':

if (!text) throw `eres ${pushname} `

      break
case 'instagrambot': {
const templateMessage = {
text: '*Mi instagram abajo👀*',footer: `sigueme🧞`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Instagram', 
url: `https://instagram.com/c4rl0s_9e`
}
},
],
}
const sendm = crls.sendMessage(from, templateMessage)
}
break
            case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 Mi dirección IP pública es: " + ip);
                    })
                })
            }
            break
case 'serbot':

if (!text) throw `😂 NO GRACIAS BRO`

      break
      case 'tonto':
      case 'cerdo':
      case 'idiota':
      case 'gil':
      case 'lesbian':
      case 'puto':
      case 'noob':
      case 'estupendo':
      case 'hachero':
      case 'elegante':
      case 'hermoso':
      case 'pequeño':
      case 'sexy':
      case 'hot': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.isGroup) return reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `El más *${command}* es @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, jawab, footer, m, {mentions: ments})
            }
            break
case 'morir':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit              
              if (!q) return reply(`¡No válido!\n\n¿que nombre quieres saber en que fecha morirá??`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`NOMBRE : ${predea.data.name}\n*muerto a la edad :* ${predea.data.age} Años.\n\n_Date prisa, arrepiéntete, hermano, porque nadie sabe de la muerte.`)
              break
case 'textoinvert': case 'invertirtxt': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length < 1) return reply(`Ejemplo:\n${prefix}fliptext MyCrls`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 TEXTO INVERTIDO 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Invertido :*\n${flipe}`)
}
break
case 'traductor': case 'traductores': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!args.join(" ")) return reply("Coloca un texto en cualquier idioma, lo traduciré al español :)")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=es&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
reply(`📘traducción : ${Infoo}`)
}
break
case 'cosplay':
teks = `aquí men >\\<`
buffer = `https://api.zacros.my.id/randomimg/cosplay`
crls.sendMessage(from, {image:{url:buffer}, caption:"👀!"}, {quoted:m})
break
case 'hackear':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!m.mentionedJid[0]) return reply(`*️A quien deseas Hackear?*\n\nEjemplo : ${prefix}hackear @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
 hacked = fs.readFileSync(`./media/hacker.mp4`) 
 let captionb = `@${m.sender.split`@`[0]} Pidió que hackee a @${m.mentionedJid[0].split`@`[0]}`
await crls.sendMessage(m.chat, { video: hacked, caption: `${captionb}`, gifPlayback: true }, { mentions: parseMention(captionb), quoted: m })
	break            
            
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                crls.sendMessage(m.chat, reactionMessage)
            }
            break  
            
            
      case 'join': {
     if (!isCreator) return reply(mess.owner)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await crls.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
     reply("Listo!")
     } else {
     crls.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Sorry, munimun 20 members are required in a group to add bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./verificado.jpg'), `${global.packname}`, `${global.botname}`, "593991398786@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await crls.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
     reply("Entré!")
     } else {
     reply("Error")
     }
     }).catch(_ => _)
     }
     }
     break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await crls.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
 case 'lirica': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply(`Comand usage: ${prefix}lyrics Opa `)
reply(mess.wait)	
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Titulo :* ${result.title}
*Autor :* ${result.author}
*Url :* ${result.link}

*Lírica:* ${result.lyrics}

`.trim())
}
break           
            
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Ejemplo : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif se ha cambiado con éxito a\n\n Packname : ${global.packname}\n Author : ${global.author}`)
            }
            break


	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'a quien deseas remover\n Ejemplo @tag'
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await crls.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'a quien deseas añadir? Ejemplo: 593XXXX'
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await crls.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
       	        if (!text) throw 'a quien deseas promover\n Ejemplo@tag'
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await crls.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'a quien deseas rebajar\n Ejemplo @tag'
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await crls.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
        if (!text) throw 'a quien deseas bloquear? Ejemplo: 593XXXX'        
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await crls.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
        if (!text) throw 'a quien deseas Desbloquear? Ejemplo: 593XXXX'
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await crls.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Texto ?'
                await crls.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Texto ?'
                await crls.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                let media = await crls.downloadAndSaveMediaMessage(quoted)
                await crls.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagen con título ${prefix + command}`
                let media = await crls.downloadAndSaveMediaMessage(quoted)
                await crls.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': case 'infoall':
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                let tekss = `══✪〘 *👥 Mención All* 〙✪══\n\n➲ *Mensaje : ${q ? q : 'Ninguno'}*\n\n`
		      	for (let mem of participants) {
		            tekss += `🏅 @${mem.id.split('@')[0]}\n`
				}
                tekss += `\n⋙ *${botname}* ⋘`
                crls.sendMessage(from, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: fkontak })
            break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            crls.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fgif })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw mess.group
               if (!isBotAdmins) throw mess.botAdmin
               if (!isAdmins) throw mess.admin
               if (!m.quoted) throw `Responder mensaje con el comando ${prefix + command}`
               crls.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
               case 'totag2': {
               if (!m.isGroup) throw mess.group
               if (!isCreator) throw mess.owner
               if (!m.quoted) throw `Responder mensaje con el comando ${prefix + command}`
               crls.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) 
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Introducir nombre!'
                let anu = await styletext(text)
                let teks = `Estilo de Texto de ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
	    
	    
	    
               case 'encuesta': {
            if (!isAdmins) throw mess.admin
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Todavía hay votos en este chat.!_\n\n*${prefix}deletevoto* - para borrar votos`
            if (!text) throw `Ingrese el motivo del voto, ejemplo: *${prefix + command} @Carlos debería ser admin?*`
            reply(`Comienza la votación!\n\n*${prefix}votopositivo* - por Si\n*${prefix}votonegativo* - por no\n*${prefix}checkvoto* - para comprobar el voto\n*${prefix}deletevoto* - para borrar votos`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 ENCUESTA 」*

*RAZÓN:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevoto* - para borrar votos`
let buttonsVote = [
  {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'VOTAR SI'}, type: 1},
  {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'VOTAR NO'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: crls.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            crls.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'votopositivo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsUpvote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: crls.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            crls.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'votonegativo': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'has votado'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ENCUESTA 」*

*Razon:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos`
            let buttonsDevote = [
              {buttonId: `${prefix}votopositivo`, buttonText: {displayText: 'votar si'}, type: 1},
              {buttonId: `${prefix}votonegativo`, buttonText: {displayText: 'votar no'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: crls.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            crls.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvoto':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
teks_vote = `*「 ENCUESTA 」*

*Razón:* ${vote[m.chat][0]}

┌〔 VOTOS POSITIVOS (SI) 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 VOTOS NEGATIVOS (NO) 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevoto* - para borrar votos


©${crls.user.id}
`
crls.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevoto': case'delvote': case 'hapusvote': {
            if (!isAdmins) throw mess.admin	
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no se vota en este grupo!*_\n\n*${prefix}encuesta* - para empezar a votar`
            delete vote[m.chat]
            reply('Eliminar con éxito la sesión de votación en este grupo')
	    }
            break
            
            
            
                 case 'grupo': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await crls.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Grupo cerrado exitoso`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await crls.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`grupo abierto exitoso`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'grupo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'grupo close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `Modo del grupo?`, crls.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await crls.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Información del grupo abierta con éxito para todos`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await crls.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Cerrado con éxito el Editar información del grupo`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `Escoge lo que deseas`, crls.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Ha estado activo antes`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antienlace activo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Inactivo antes`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antienlace inactivo !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `Modo de Antilink`, crls.user.name, m)
                }
             }
             break
            case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Anteriormente activo`)
                db.data.chats[m.chat].mute = true
                reply(`${crls.user.name} ha sido silenciado en este grupo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Anteriormente inactivo`)
                db.data.chats[m.chat].mute = false
                reply(`${crls.user.name} ha sido desactivado en este grupo !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `Mute Bot`, crls.user.name, m)
                }
             }
             break
            case 'linkgrupo': case 'linkgc': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await crls.groupInviteCode(m.chat)
                crls.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink del grupo🌛 : ${groupMetadata.subject}`, fgclink, { detectLink: true })
            }
            break
                     case 'namegp':
                     
		             if (args.length < 1) return reply (`el nombre actual del grupo es: *${groupName}*`)
		             break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === '1') {
                    await crls.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await crls.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await crls.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await crls.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CAMBIAR GRUPO EFÍMERO",
                rows: [
                {title: "Ephemeral 1 días", rowId: `ephemeral 1`, description: `Activar el grupo efímero durante 1 día`},
                {title: "Ephemeral 7 días", rowId: `ephemeral 7`, description: `Activar el grupo efímero durante 7 días`},
                {title: "Ephemeral 90 días", rowId: `ephemeral 90`, description: `Activar el grupo efímero durante 90 días`},
                {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Desactivar este grupo efímero`}
                ]
                },
                ]
                crls.sendListMsg(m.chat, `Seleccione la siguiente lista de opciones efímeras !`, crls.user.name, `Hola Admin${groupMetadata.subject}`, `Click Aquí`, sections, m)
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'El mensaje no fue enviado por un bot!'
                crls.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `y el Texto?\n\nEjemplo : ${prefix + command} Test`
                let getGroups = await crls.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Envío de transmisiones a ${anu.length} Chats en grupo, hora de finalización ${anu.length * 1.5} Segundos `)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Codigo Fuente',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Número de teléfono',
                                    phoneNumber: '+593 99-139-8786'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Estado del Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contacto Owner',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      crls.send5ButLoc(i, txt, crls.user.name, global.thumb, btn)
                    }
                m.reply(`Envío exitoso de transmisiones a ${anu.length} Grupo(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `y el texto?\n\n Ejemplo: ${prefix + command} Test`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Envío de transmisiones a ${anu.length} Chats\nHora de finalización ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Codigo Fuente',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Número de teléfono',
                                    phoneNumber: '+593 99-139-8786'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Estado del Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contacto Owner',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      crls.send5ButLoc(yoi, txt, crls.user.name, global.thumb, btn)
		}
		m.reply(' Broadcast lista')
            }
            break
            case 'infochat': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!m.quoted) m.reply('Mensaje de respuesta')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'El mensaje no fue enviado por un bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Hora :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Estado :* ${read ? 'Leido' : 'Enviado'}\n\n`
                }
                crls.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'quoted': {      
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
		if (!m.quoted) return reply('responde a un mensaje!!')
		let wokwol = await crls.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('El mensaje al que respondió no contiene una respuesta')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LISTA DE CHAT PERSONAL*\n\nTotal Chat : ${anu.length} Chats\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nombre :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 crls.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LISTA DE CHAT EN GRUPO*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await crls.groupMetadata(i)
                     teks += `⬡ *Nombre :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Desconocido'}\n⬡ *ID :* ${metadata.id}\n⬡ *Era :* ${moment(metadata.creation * 1000).tz('America/Guayaquil').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Miembro :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 crls.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    crls.sendText(m.chat, 'Lista Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!quoted) throw `Responder video / imagen con el comando ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await crls.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo 10 segundos!')
                let media = await quoted.download()
                let encmedia = await crls.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Enviar imagen/video con el comando ${prefix + command}\nDuracion Video 1-9 segundos`
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw `Responder video / imagen con el comando ${prefix + command} texto1|texto2`
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Responder video / imagen con el comando ${prefix + command} texto1|texto2`
                if (!teks2) throw `Responder video / imagen con el comando ${prefix + command} texto1|texto2`
            	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await crls.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo 10 segundos!')
                    let media = await quoted.download()
                    let encmedia = await crls.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Responder video / imagen con el comando ${prefix + command} texto1|texto2`
                }
            }
            break
            case 'ebinary': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Ejemplo: ${prefix + command} Texto`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Ejemplo : ${prefix + command} Texto`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
            case 'emojimix': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Ejemplo: ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Ejemplo : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await crls.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	    if (!text) throw `Ejemplo: ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await crls.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    
	    
//by Thunder team
case 'animesearch': { 
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
    {
     title: `${i.title}\n\n`, 
     rowId: `${prefix}animesearch2 ${i.mal_id}`,
     description: `${i.synopsis}`
    }, 
    ]
     }
     sections.push(list)   
     }
  const sendm =  crls.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: "By Carlos",
       title: "La base de datos está en este botón.",
       buttonText: "Haga clic y vea los resultados de la búsqueda➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'animesearch2':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Título:* *${res.data.title}*\n*inglés:* *${res.data.title_english}*\n*japonés:* *${res.data.title_japanese}*\n*Tipo de animé:* *${res.data.type}*\n*Adaptación:* *${res.data.source}*\n*Total episodios:* *${res.data.episodes}*\n*Estado:* *${res.data.status}*\n*En curso:* *${res.data.airing ? 'Sí' : 'No'}*\n*Emitido:* *${res.data.aired.string}*\n*Duración:* *${res.data.duration}*\n*Clasificación:* *${res.data.rating}*\n*Puntaje:* *${res.data.score}*\n*Rango:* *${res.data.rank}*\n*Productor Principal:* *${res.data.producers.name}*\n*Estudio:* *${res.data.studios[0].name}* `
crls.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
  case 'backup':
  if (!isCreator) return reply(mess.owner)
  crls.sendMessage(sender, { document: fs.readFileSync('./database/database.json'), mimetype: 'json', caption: 'Una petición de : Owner', mentions: []}, { quoted: m })
  break
	    
	    
	    
	       case 'attp': case 'ttp': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
           if (!text) throw `Ejemplo : ${prefix + command} text`
           await crls.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'crls', '😴', m, {asSticker: true})

         }
         break
         	       case 'attp1': case 'attp2': case 'attp3': case 'attp4': case 'attp5': case 'attp6': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit                  
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await crls.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${text}`, 'by', 'carlo', st, {asSticker: true})

         }
         break
         	       case 'attpgrad': case 'attpgradient': {
                  
	       if (!isPremium && global.db.data.users[m.sender].limit < 1) return  (mess.endLimit) //ae
	       db.data.users[m.sender].limit -= 1 // -1 limit       
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await crls.sendMedia(m.chat, `https://api.violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=${text}`, 'carlos', 'Op', st, {asSticker: true})

         }
         break
         
         case 'emoji':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit 
if (args.length == 0) return reply(`Uso: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.zeeoneofc.xyz/api/emoji/apple?emoji=${encodeURI(q)}&apikey=V12`)
let encmedia = await crls.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	            if (!/image/.test(mime)) return reply(`*Enviar/responder imagen con leyenda* ${prefix + command}`)
	            	        reply(mess.wait)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await crls.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                crls.sendMessage(m.chat, { image: buf, caption: `by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'viewfinder': case 'angie': case 'aria': case 'attic': case 'black-and-white': case 'chrome-1970': case 'contrast-bandw': case 'duotone': case 'eva': case 'golden-hour': case 'japanese': case 'sphinx': case 'light-leak': case 'movie':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	            if (!/image/.test(mime)) return reply(`*Enviar/responder imagen con leyenda* ${prefix + command}`)
	            	        reply(mess.wait)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await crls.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://api.violetics.pw/api/photofilter/${command}?apikey=beta&image=${anu}`)
                crls.sendMessage(m.chat, { image: buf, caption: `by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	        let respond = `Enviar/responder imagen/pegatina con el comando ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await crls.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
case 'simi':{
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=es&cf=false`)
let res = anu.success;
m.reply(res)
}
break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Responde a un sticker'
                if (!/webp/.test(mime)) throw `Pegatina de respuesta con comando *${prefix + command}*`
                m.reply(mess.wait)
                let media = await crls.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    crls.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'responde un sticker en movimiento'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await crls.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await crls.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar / Responder Video / Audio que desea hacer audio con em comando ${prefix + command}`
            if (!quoted) throw `Enviar / Responder Video / Audio que desea hacer audio con em comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            crls.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Enviar / Responder Video / Audio que desea hacer MP3 con el comando ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Enviar / Responder Video / Audio que desea hacer MP3 con el comando ${prefix + command}`
            if (!quoted) throw `Enviar / Responder Video / Audio que desea hacer MP3 con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            crls.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${crls.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responda video / audio que desea hacer VN con el comando ${prefix + command}`
            if (!quoted) throw `Responda video / audio que desea hacer VN con el comando ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            crls.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Responde img'
                if (!/webp/.test(mime)) throw `responde sticker gif con el comando *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await crls.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await crls.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convertir Webp a Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit        
                if (!quoted) throw 'y la imagen/video?'	        
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await crls.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Enviar/responder imagen con comando ${prefix + command}`
	    if (!/image/.test(mime)) throw `Enviar/responder imagen con comando ${prefix + command}`
	    if (/webp/.test(mime)) throw `Enviar/responder imagen con comando ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await crls.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    crls.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit    
                if (!text) throw `Ejemplo: ${prefix + command} como le digo`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Resultado de'+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Tipo : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Titulo : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duración : ${i.timestamp}\n⭔ Subido hace : ${i.ago}\n⭔ Autor : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                crls.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {      
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Ejemplo : ${prefix + command} f`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += ` *Titulo* : ${g.title}\n`
                teks += ` *Descripcion* : ${g.snippet}\n`
                teks += ` *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'googleimg': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
        if (!text) throw `Ejemplo : ${prefix + command} cocacola`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `googleimg ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GOOGLE IMG SEARCH 」-------*
🤠 *Consulta* : ${text}
🔗 *Url* : ${images}`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
case 'music': case 'play': case 'ytbusc': case 'ytplay': {
if (!text) throw `Ejemplo: ${prefix + command} nuestro juramento`
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
 let ytvc = await hx.youtube(anu.url)
 let buttons = [
 {buttonId: `ytmp4 ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
 {buttonId: `ytmp3 ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Youtube Player_  」

*Titulo :* ${anu.title}
*Duración :* ${anu.timestamp}
*Viewers :* ${anu.views}
*Hace :* ${anu.ago}
*Canal :* ${anu.author.name}
*Url :* ${anu.url}`,
 footer: `${global.botname}`,
 buttons: buttons,
 headerType: 4,

 }
 crls.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break


 case 'ytmp4': {
 crls.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Aquí está...",}, {quoted:m})
 }
 break

 case 'ytmp3': {
 crls.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true}, {quoted:m})
 }
 break
            case 'pinterest': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw 'que buscas?'   
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                let anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                crls.sendMessage(m.chat, { image: { url: result }, caption: ' Media Url : '+result }, { quoted: m })
            }
            break
case 'anime': case 'husbu': case 'nekos': {    
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
		db.data.users[m.sender].limit -= 1
                reply(mess.wait)
                crls.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generar imagen aleatoria de ' + command }, { quoted: m })
            }
            break
          case 'loli': case 'Loli': {        
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
            let buttons = [
                    {buttonId: `loli`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ' },
                    caption: ` Random Loli xd`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'pack':{         
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            reply(mess.wait)
            let anu = await fetchJson('https://raw.githubusercontent.com/darlyn1234/recursos/main/proyectosweb/hotgirl-darlyn.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            crls.sendMessage(m.chat, { image: { url: random.hot }, caption: `aqui ta` }, { quoted: m })
        }
        break
          case 'ero': case 'eronsfw': {         
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
            let buttons = [
                    {buttonId: `ero`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ' },
                    caption: ` deje de pedirme esto 😳`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
				case 'waifu2': case 'loli2':	
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit		            		
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					crls.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
		 			reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						crls.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
case 'nekost':          
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/neko`)
					.then(({data}) => {
						crls.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
case 'neko': case 'waifu':case 'trap':case 'blowjob':     
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit     
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/nsfw/${command}`)
					.then(({data}) => {
						crls.sendImageAsSticker(m.chat, data.url, st, { packname: global.packname, author: global.author })
					})
					break
					            case 'milf': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
            let buttons = [
                    {buttonId: `milf`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/randomimg/milf' },
                    caption: ` Imagen random de milf`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'avatar': {         
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
                crls.sendMessage(m.chat, { image: { url: api('bri', '/random/'+command, {}, 'apikey') }, caption: 'Generar imagen aleatoria de ' + command }, { quoted: m })
            }
            break
	    case 'imgpareja': {	 
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                crls.sendMessage(m.chat, { image: { url: random.male }, caption: `pareja hombre` }, { quoted: m })
                crls.sendMessage(m.chat, { image: { url: random.female }, caption: `pareja mujer` }, { quoted: m })
            }
	    break
            case 'coffe': case 'cafe': {        
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'doge':
case 'dogestick':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await crls.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'animestick':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await crls.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'wppanime': case 'wallpaper3': {      
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                reply(mess.wait)
            let buttons = [
                    {buttonId: `wallpaper3`, buttonText: {displayText: 'Next wallpaper'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://brizas-api.herokuapp.com/random/wallpaper?apikey=brizaloka' },
                    caption: ` Aquí lo tienes`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Introduzca el título de la consulta'
		let { wallpaper } = require('./lib/scraper')
               let anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Titulo : ${result.title}\n⭔ Categoría: ${result.type}\n⭔ detalle: ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {      
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Ingrese el título de la consulta'
		let { wikimedia } = require('./lib/scraper')
                let anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: ` Titulo : ${result.title}\n Fuente : ${result.source}\n Media Url : ${result.image}`,
                    footer: crls.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                crls.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'resize': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
    if (!m.mtype === "imageMessage") return replay("No es una imagen")
    if (!text) return replay(`Ejemplo: ${prefix + command} 300x300`)
    let p = text.split("x")[0]
    let l = text.split("x")[1]
    let media = await crls.downloadAndSaveMediaMessage(quoted, "image")
    let ran = getRandom('.jpg')
    exec(`ffmpeg -i ${media} -vf scale=${p}:${l} ${ran}`, async (err) => { 
      fs.unlinkSync(media)
      if (err) return setReply(err)
      let buffer = fs.readFileSync(ran)
      await crls.sendMessage(m.chat, {
        caption: `hola @${m.sender.split("@")[0]}`, 
        image: buffer,
        contextInfo: thumb
      },{ quoted: m })
      fs.unlinkSync(ran)
    })
  } 
    break
    case 'getgcjid': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
    if (!m.isGroup) return replay(mess.group)
    let metadata = await crls.groupMetadata(m.chat)
    let id = metadata.id
    let ppgc = await crls.profilePictureUrl(metadata.id, 'image')
    let buttons = [{
      index: 1,
      urlButton: {
        displayText: 'COPY JID',
        url: 'https://www.whatsapp.com/otp/copy/'+id 
      }
    }]
    crls.sendMessage(m.chat, {
      text: id,
      templateButtons: buttons,
      footer: crls.user.name
    }, { quoted: m })
  }
  break
                        case '3d-effect': case '1917-style': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dluxury': case '3dlove': case '3dgolden': case '3dgradient': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3dscifi': case '3dtext-effect': case '3dunderwater': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'azzenka-league-of-kings':  case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effect':  case 'circuit': case 'dark-gold-metal': case 'color-fireworks': case 'cool-metal': case 'decorated-cookie': case 'deluxe-gold': case 'dinamo': case 'deluxe-silver': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'firework':  case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-effect2': case 'galaxy-effect': case 'galaxy-angel': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'genji-overwatch': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-fox': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'graffiti-color': case 'graffiti-text3': case 'graffiti-text5': case 'graffiti-text8': case 'graffiti-text4': case 'heart-birthday': case 'hanzo-overwatch': case 'greenhorror': case 'halloween-fire': case 'green-brush': case 'hero3-crossfire': case 'heart-cups': case 'holographic': case 'light-text':  case 'lend-text': case 'ledtext': case 'layeredtext': case 'lol-caitlyn': case 'lol-ahri': case 'logo-galaxy': case 'lol-fizz': case 'lol-ezreal-and-shen': case 'lol-fiora': case 'lol-draven': case 'lol-jinx': case 'lol-kalista': case 'lol-khazix': case 'lol-kogmaw': case 'lol-leesin': case 'lol-lux': case 'lol-master-yi': case 'lol-miss-fortune': case 'lol-nidalee': case 'lol-quinn': case 'lol-sona': case 'lol-riven': case 'lol-talon': case 'lol-thresh': case 'lol-vayne': case 'machines-effect': case 'lol-yasuo': case 'lol-zed': case 'lol-wukong': case 'magic-text': case 'mei-overwatch': case 'matrix-text': case 'magmatext': case 'metal-lion-2': case 'metal-headshot': case 'metal-avenger': case 'metal-real-madrid': case 'metal-star': case 'metal-superman': case 'metal-text-effect': case 'metallic-letter': case 'metalic': case 'metal-wolf-2': case 'mganga-league-of-kings': case 'miniontext': case 'modern-gold-3': case 'modern-gold-4': case 'modern-gold-5-pro': case 'modern-gold-green': case 'modern-gold-purple': case 'modern-gold-red': case 'modern-gold-sliver': case 'modern-goldred': case 'neon': case 'neon-2': case 'neon-brightblue': case 'neon-effects': case 'neon-light-galaxy': case 'neon-satin': case 'neondevil': case 'neonlight': case 'neontext-light': case 'paper-cut': case 'paperart': case 'rainbow-effect': case 'reaper-overwatch': case 'red-birthdaycake': case 'redhot-metal': case 'resht-league-of-kings': case 'science': case 'sfg-crossfire': case 'sketch': case 'wetglass': case 'watercolor': case 'water-effect': case 'water-3d': case 'violet-league-of-kings': case 'snowtext': case 'soldier-overwatch': case 'sunlight-shadow': case 'transformer': {             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'uso?\n el comando + texto'
                reply(mess.wait)
                crls.sendMessage(m.chat, { image: { url: api('vio', '/api/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
            case 'glitch':
case 'tiktokefect':
case 'ttlogo':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/textpro/glitchtext?apikey=beta&text=${teks1}&text2=${teks2}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'leonlogo':
case 'logoleon':
case 'leonlg':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/textpro/lion-mascot?apikey=0567-17a1-1747&text=${teks1}&text2=${teks2}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'lisatxt':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
	buffer = await getBuffer(`http://brizas-api.herokuapp.com/imgeffect/lisapresentation?apikey=brizaloka&text=${teks1}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'sings':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} text1|text2`)
text1 = text.split('|')[0] ? text.split('|')[0] : '-'
text2 = text.split('|')[1] ? text.split('|')[1] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/arrow-signs?apikey=0567-17a1-1747&text1=${text1}&text2=${text2}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'breakingnew':
case 'breakingnews':
case 'bnews':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} titulo principal|canal|subtítulo`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/breaking-news?apikey=0567-17a1-1747&title1=${teks1}&channel=${teks2}&title2=${teks3}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'retrowb':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} txt1|txt2|txt3`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/retro-wave?apikey=beta&text1=${teks1}&text2=${teks2}&text3=${teks3}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'diploma':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} titulo Universidad|años|nombre|grado|presidente|vicepresidente`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
teks4 = text.split('|')[3] ? text.split('|')[3] : '-'
teks5 = text.split('|')[4] ? text.split('|')[4] : '-'
teks6 = text.split('|')[5] ? text.split('|')[5] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/diploma?apikey=beta&UniversityName=${teks1}&year=${teks2}&Name=${teks3}&Degree=${teks4}&President=${teks5}&VicePresident=${teks6}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'esfrase':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
reply(mess.wait)
if (!text) return reply(`usa ${prefix + command} texto1|texto2|texto3|texto4|texto5`)
teks1 = text.split('|')[0] ? text.split('|')[0] : '-'
teks2 = text.split('|')[1] ? text.split('|')[1] : '-'
teks3 = text.split('|')[2] ? text.split('|')[2] : '-'
teks4 = text.split('|')[3] ? text.split('|')[3] : '-'
teks5 = text.split('|')[4] ? text.split('|')[4] : '-'
	buffer = await getBuffer(`https://api.violetics.pw/api/photofunia/keep_calm?apikey=beta&line1=${teks1}&line2=${teks2}&line3=${teks3}&line4=${teks4}&line5=${teks5}`)
	crls.sendImage(m.chat, buffer, mess.succes, m)
	}
	break
case 'colorfulpubg':{
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit   
	if (!text) return reply(`Ex: ${prefix + command} nombre|color\nusa: ${prefix + command} carlos|pink-yellow`)
	if (!text.includes('|')) return reply(`Ex: ${prefix + command} nombre|color\nUso: ${prefix + command} carlos|pink-yellow`)
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
	const style = ['gold','green-blue','pink-yellow','green-yellow','cyan-purple','orange-red']
if (!style.includes(m2)){ 
let listt = `*El color que ingresaste es incorrecto*\n\n_Aquí hay una lista de los colores correctos, Total_ *${style.length}* _color_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(mess.wait)
let textpro2 = (api('alfa', '/api/ephoto360/'+command, {text: m1, color : m2}, 'apikey'))
crls.sendMessage(from, {image:{ url: textpro2}, caption: `Maker ${command}` }, {quoted:m})
}}

	break
case '100dollars':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit                
                reply(mess.wait)
		let { TelegraPh } = require('./lib/uploader')
                let media = await crls.downloadAndSaveMediaMessage(quoted)                
                    let anu = await TelegraPh(media)  
                    resu = `https://api.violetics.pw/api/photomaker/100_dollars?apikey=7f1b-a7e2-a6ff&image=${anu}`              
                crls.sendMessage(m.chat, { image: { url: resu }, caption: `Maker ${command}` }, { quoted: m })

break
            case 'anonymous-neon': {
             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                reply(mess.wait)
                crls.sendMessage(m.chat, { image: { url: api('vio', '/api/ephoto360/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
                        case 'trump': {
             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                reply(mess.wait)
                crls.sendMessage(m.chat, { image: { url: api('zenz', '/creator/' + command, { text: text }, 'apikey') }, caption: `By ${command}` }, { quoted: m})
	    }
            break
            case 'einstein': {
             
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el texto?'
                reply(mess.wait)
                crls.sendMessage(m.chat, { image: { url: api('vio', '/api/photofunia/' + command, { text: text }, 'apikey') }, caption: `photofunia ${command}` }, { quoted: m})
	    }
            break	
                    case 'bug': case 'report': {
                    	
                    	if(!text) throw `Introduzca el ejemplo de error\n\n${command} : Menu Erroneo `
                    	crls.sendMessage(`593991398786@s.whatsapp.net`, {text: `*Informe de error de:* wa.me/${m.sender.split("@")[0]}
Mensaje de informe: ${text}` })
reply(`Reportado con éxito al propietario\n\nAsegúrese de que el error sea válido, si juega con esto, use esta función una y otra vez sin motivo, será bloqueado con seguridad !`)
                    }
                    break
                    case 'solicitar': case 'solicit': {
                    	
                    	if(!text) throw `Introduzca su solicitud\n\n${command} : deseó.... `
                    	crls.sendMessage(`593991398786@s.whatsapp.net`, {text: `*Solicitud de:* wa.me/${m.sender.split("@")[0]}
mensaje de Solicitud: ${text}` })
reply(`Enviado con éxito al propietario\n\nAsegúrese de que haya escrito bien su solicitud, si juega con esto, use esta función una y otra vez sin motivo, será bloqueado con seguridad !`)
                    }
                    break
case 'hello':
   reply('¡Hola Oye! usa .menu para ver mi lista de comandos')
 
    break
        case 'chatid':
        m.reply(`${m.chat}`)
        break 	
case 'tiktok': {
if (!args[0]) return m.reply(`_Ingresa un link de tiktok_\nEjemplo: ${prefix + command} https://vm.tiktok.com/ZMNHKVdPJ/?k= `)
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
if (!url) throw 'Can\'t download video!'
tistos = `*TIKTOK DOWNLOADER*\nUsuario: ${nickname}\nDescripcion: ${description}\n© 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇`
	crls.sendMessage(m.chat, {video: {url}, caption: tistos}, { quoted: m })
}
break	
	        case 'instagram': case 'ig': case 'igdl': {
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) crls.sendFileUrl(m.chat, media, `Descargar URL Instagram desde ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    crls.sendFileUrl(m.chat, anu.media[0].url, `Descargar URL Instagram desde ${isUrl(text)[0]}`, m)
                }
            }
            break
                       case 'git': case 'gitclone':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone +repositorio\nEjemplo: https://github.com/CarlosTwT/privateBot`)
    if (!regex1.test(args[0])) return reply("y el link?" )
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    crls.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			break
case 'igstalk': case 'stalkig': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!args.join(" ")) return reply(`Ejemplo : \n${prefix + command} CarlosTwT`)
reply(mess.wait)
stalker.igstalk(args[0])
igSt = await stalker.igstalk(args[0])
teks = `INSTAGRAM PERFIL
 • Username : ${args[0]}
 • Nombre : ${igSt.data.fullname}
 • Biografía : ${igSt.data.bio}
 • Bio Url : ${igSt.data.url}
 • Seguidores : ${igSt.data.follower} followers
 • Siguiendo : ${igSt.data.following} following
 • Privado : ${igSt.data.private ? "false" : "true"}
 • Verificado : ${igSt.data.verifed ? "false" : "true"}
 • Publicado : ${igSt.data.collections} postingan
 • VidPost : ${igSt.data.videotimline} video
 • FB Conectado : ${igSt.data.connected_fb}
https://www.instagram.com/${args[0]}`
crls.sendMessage(from, {image:{url:igSt.profile.high}, caption:teks}, {quoted:m})
}
break
case 'ipinfo': case 'infoip': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply("donde está la ip? ")
fetchJson('http://ip-api.com/json/' + text ).then((y) => {
reply(`						『 IP INFORMACIÓN 』\n
🖥 *IP:* ${text}
📌 *Estado:* ${y.status}
🌐 *País:* ${y.countryCode}
🌍 *Region:* ${y.region}
🗾 *Nombre de Región:* ${y.regionName}
🏢 *Ciudad:* ${y.city}
🛶 *Zip:* ${y.zip}
🛰 *Latitud:* ${y.lat}
🛩 *Longitud:* ${y.lon}
⏰ *Zona horaria:* ${y.timezone}
🔋 *Isp:* ${y.isp}
📡 *Org:* ${y.org}
🪄 *As:* ${y.as}
`)
})
}
break
case 'iploc': case 'ipmap': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) return reply("y la ip?")
reply(`	      『 IP LOCALIZACIÓN 』\n\n*UBICACIÓN DE : ${text}*`)
fetchJson('http://ip-api.com/json/' + text ).then((y) => {
anu = `
🛰 *Latitud:* ${y.lat}
🛩 *Longitud:* ${y.lon}
`
crls.sendMessage(from, { location :  { degreesLatitude: y.lat, degreesLongitude: y.lon }}, {quoted: m})
})
}
break

case 'textchat':
  if (!isCreator) return m.reply(mess.owner)
  if (args.length < 2) return reply(`Enviar comandos ${command} número|Su informe\nEjemplo ${command} 593991398786|Perro\n\nEMPIEZA sin +!`)
  var nomorcuy = q.split('|')[0] ? q.split('|')[0] : q
                var okecuy = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`Mensaje enviado con exito`)
crls.sendMessage(`${nomorcuy}@s.whatsapp.net`, {text: `*[ DEL PROPIETARIO ]*\nMensaje del propietario : *${okecuy}*\nThanks For Using 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇-MD! ( ${sender} )`, mentions: [sender]})
break

			case prefix+'grupwa': case prefix+'searchgrup':
			             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
				if (args.length < 2) return reply(`Enviar pedidos ${command} nombre grupo`)
				reply(mess.wait)
			    hx.linkwa(q).then(async(data) => {
				  if (data.length == 0) return reply(`Grupo ${q} extraviado`)
				  var teks = `*Resultados de búsqueda de ${q}*\n\n`
				  for (let x of data) {
					teks += `*Nombre :* ${x.nama}\n*Link :* ${x.link}\n\n`
				  }
				  reply(teks)
				}).catch(() => reply(mess.error))
			    break
case 'igdl': case 'instagramdl': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!args[0]) return m.reply(`Ejemplo :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `							*｢  INSTAGRAM DOWNLOADER  ｣*  \n\n❒ Usuario : ${resed.user.username ? resed.user.name : "undefined"}\n❒ Seguidores : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "tipo": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `igdls ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Seleccione los medios a continuación para descargar_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${footer}`,
buttons: buttons,
headerType: 4
}
crls.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply('error')
}
}
break
case 'igdls': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args[0] === "mp4") {
crls.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
crls.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break
	        case 'fbdl': case 'fb': case 'facebook': {
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'y el link? !'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                crls.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ título: ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Introducir enlace de consulta!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                crls.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
        case 'ringtone': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
		if (!text) throw `Ejemplo : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		crls.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	                case 'SsWeb': case 'ssweb': case 'Ssweb': case 'ScreenshotWeb': case 'screenshotweb':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                 if (!text) throw `Ejemplo: *${prefix + command} https://github.com/CarlosTwT*`
                 reply(mess.wait)
                 crls.sendMessage(m.chat, {image: {url: "https://api.akuari.my.id/other/ssweb?link="+text}})
            }
            break
            case 'npmsearch':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
    let fetch = require('node-fetch') 
	if (!text) throw `_Ingresa el nombre del paquete npm_\n_Ejemplo_ : ${prefix}npmsearch whatsapp-web.js`
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
            case 'gfx1': case 'gfx2': case 'gfx3': case 'gfx4': case 'gfx5': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	        let respond = `Usalo así ${prefix + command} Crls`
            if (!text) throw respond
	        m.reply(mess.wait)
	        let data = `https://api-xriy04.herokuapp.com/api/canvas/${command}?text=${text}`
	        crls.sendMessage(m.chat, { image: { url: data }, caption: 'acá!' }, { quoted: m })
            }
	       break      
case 'profile': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
const jidny = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender ? m.sender : false
const ddny = await store.chats.all().filter(v => v.id.includes(jidny)).map(v => v)
const isblocks = await crls.fetchBlocklist()
const isBlock = isblocks.includes(jidny)
texnr = `     「 Profile Inspector 」
▸ Numero : ${jidny.split("@")[0]}

▸ Mencion : @${jidny.split("@")[0]}

▸ Nombre : ${crls.getName(jidny)}

▸ Biografía : ${jsonformat(await crls.fetchStatus(jidny).catch(() => {}))}

▸ Bussines : ${jsonformat(await crls.getBusinessProfile(jidny))}

▸ última conversación : ${ddny[0] ? moment(ddny[0].conversationTimestamp * 1000).tz("America/Guayaquil").format("DD/MM/YYYY HH:mm:ss") : "Indefinido"}

▸ Chat : ${ddny[0] ? ddny[0].unreadCount +" chat" : "0 chat"}
▸ bloqueado? : ${isBlock}`
try {
ppuser = await crls.profilePictureUrl(jidny, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
crls.sendMessage(m.chat, { image: { url: ppuser }, caption: texnr, mentions: await parseMention(texnr), contextInfo:{externalAdReply:{
title:"WhatsApp Bot Multi Device",
body:"By Crls",
thumbnail: thumb,
mediaType:2,
mediaUrl: "https://youtu.be/pLQEdhCoBE4",
sourceUrl: "https://youtu.be/pLQEdhCoBE4"
}}}, {quoted:m})
}
break

            case 'gitstalk':
            case 'ghstalk':
            case 'githubstalk': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw `Usalo así ${prefix + command} *username*\n\nEjemplo : ${prefix + command} CarlosTwT`
                y = await fetchJson(`https://api.github.com/users/${text}`)
                let teks = `*Perfil Github*\n\n• Usuario : ${y.login}\n• Id : ${y.id}\n• Nodo Id : ${y.node_id}\n• Type : ${y.type}\n• Nombre : ${y.name}\n• Compañía : ${y.company}\n• Blog : ${y.blog}\n• Ubicación : ${y.location}\n• Email : ${y.email}\n• Bio : ${y.bio}\n• Repo(s) Publicos : ${y.public_repos}\n•  Gist(s) Gits : ${y.public_gists}\n• Seguidores : ${y.followers}\n• Siguiendo : ${y.following}\n• Creado el : ${moment(y.created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n• Actualizado el : ${moment(y.updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}`
                let ghs = [

                    {

                        "urlButton": {

                            "displayText": `Perfil`,

                            "url": `https://github.com/${y.login}`

                        }

                    }

                ]

                buf = await getBuffer(y.avatar_url)

                crls.send5ButImg(m.chat, teks, `© ${crls.user.name}`, buf, ghs)
            }
            break
case 'dados': case 'dado':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
const dir = [
    'https://tinyurl.com/ygms8wvy',
    'https://tinyurl.com/yhdyhnap',
    'https://tinyurl.com/yfwjbou7',
    'https://tinyurl.com/yh3e3ogt',
    'https://tinyurl.com/yfmhpvxs',
    'https://tinyurl.com/ygpxka9q'
  ];
  crls.sendMedia(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
  }
  break
case 'autoadmin':{
     if (!m.isGroup) return reply(mess.group)
     if (!isCreator) return reply('Este comando es solo para el creador')
     m.reply('Ahora sos admin papai') //opcional 
    await crls.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
break
case 'deleteadmin':{
    if (!m.isGroup) return reply(mess.group)
    if (!isCreator) return reply('Este comando es solo para el creador')
    m.reply('Ya no eres administrador') // opcional
    await crls.groupParticipantsUpdate(m.chat, [m.sender], "demote")
}
break
        case 'spotify':
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //ae
db.data.users[m.sender].limit -= 1 // -1 limit
            if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
            axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=Papah-Chan&url=${args[0]}`).then(({ data }) => {
                var caption = `Titulo : ${data.result.title}\n`
                caption += `Artista : ${data.result.artists}\n`
                caption += `Duracion : ${data.result.duration}\n`
                caption += `Popularidad : ${data.result.popularity}\n`
                caption += `Preview : ${data.result.preview_url}\n`
                crls.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
                    crls.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                })
            })
            break
		   case 'bass': case 'blown': case 'deep': case 'saturado': case 'fast': case 'fat': case 'nightcore': case 'reversa': case 'robot': case 'lento': case 'suave': case 'ardilla':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/saturado/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reversa/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/lento/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/suave/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/ardilla/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await crls.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                crls.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda al audio que desea cambiar con el título *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Responde mensaje!'
                if (!m.quoted.fileSha256) throw 'SHA256 Falta hash'
                if (!text) throw `Para el comando Qué?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tiene permiso para cambiar este comando de sticker'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`listo!`)
            }
            break
 /*PRUEBAS*/  
 case "blockspam": //russo and chefin
if (!isCreator) return crls.sendMessage(from, {text: 'solo yo puedo usar esto'})
if (!q) return crls.sendMessage(from, {text: 'Donde es la cantidad mn? 🤷‍♂�?'})
for (let i = `${q}`;i !== 0; i -=1){
crls.updateBlockStatus(from, "block")
crls.updateBlockStatus(from, "unblock")
}
break
 case 'checknumber':
  reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case 'veriphone':
  reply(mess.wait)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
  case 'weather':
  if (!args[0]) throw " proporcione el nombre del lugar o la ubicación"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `*📍LUGAR:* ${name}\n*PAÍS:* ${Country}\n*TIEMPO:* ${Weather}\n*TEMPERATURA:* ${Temperature}\nTEMPERATURA MÍNIMA: ${Minimum_Temperature}\n*📛TEMPERATURA MÁXIMA:* ${Maximum_Temperature}\n*HUMEDAD:* ${Humidity}\n*VIENTO:* ${Wind}
  `

    reply(wea)
  } catch (e) {
    return "Ubicación de error no encontrada!!!"
  }
break
case 'tts':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
  const gtts = require('./src/gtts')(args[0])
  if (args.length < 1) return crls.sendMessage(from, `Ejemplo: ${prefix}es Hola`, text, {quoted: m})
  if (args.length < 2) return crls.sendMessage(from, `Ejemplo: ${prefix}es Hola`, text, {quoted: m})
 var dtt = body.slice(20)
  reply(mess.wait)
  var ranm = getRandom('.mp3')
		var	rano = getRandom('.ogg')
				dtt.length > 300
         gtts.save(ranm, dtt, function() {
          exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
          fs.unlinkSync(ranm)
          buffer = fs.readFileSync(rano)
          if (err) return reply('error')
          Ruri.sendMessage(from,  audio, {quoted: m, ptt:true})
          crls.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true, quoted: m})
          fs.unlinkSync(rano)
          })
          })
  break
 
case 'savefrom': {

              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit 

if (!text) return m.reply(`Error al descargar medios y enviar audio ${prefix + command} link url`) 

if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*El enlace que proporcionaste no es válido*'
let noh = require('@bochilteam/scraper')                

noh.savefrom(`${text}`).then(async (data) => {

let sections = []   

for (let i of data.url) {

const list = {title: `${i.type}`,

rows: [

  {

   title: `Calidad ${i.subname}`, 

   rowId: `${prefix}get ${text}`,

   description: `${data.hosting}`	     

  }, 

  ]

 }

 sections.push(list)   

 }

const sendm =  crls.sendMessage(

  m.chat, 

  {

   text: `${data.meta.title} *Aquí está la lista de videos, haga clic en el botón de abajo para elegir*`,

   footer: `ī.am/𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩`,

   title: "*| SAVEFROM DOWNLOAD |*",

   buttonText: "CLICK ACÁ",

   sections

  }, { quoted : m })                 

            }).catch((err) => {

                reply(`*Lo sentimos, se ha producido un error*`)

            })

        }

break


 case 'song': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
  reply(mess.wait)
  if (!text) throw `Ejemplo: ${prefix + command} Get Lucky`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO: ${search.all[0].title}`,`MUSIC: ${search.all[1].title}`,`VIDEO: ${search.all[2].title}`,`MUSIC: ${search.all[3].title}`,`VIDEO: ${search.all[4].title}`,`MUSIC: ${search.all[5].title}`,`VIDEO: ${search.all[6].title}`,`MUSIC: ${search.all[7].title}`,`VIDEO: ${search.all[8].title}`,`MUSIC: ${search.all[9].title}`,`VIDEO: ${search.all[10].title}`,`MUSIC: ${search.all[11].title}`,`VIDEO: ${search.all[12].title}`,`MUSIC: ${search.all[13].title}`,`VIDEO: ${search.all[14].title}`,`MUSIC: ${search.all[15].title}`,`VIDEO: ${search.all[16].title}`,`MUSIC: ${search.all[17].title}`,`VIDEO: ${search.all[18].title}`,`MUSIC: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let numero = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'NÚMERO DE RESULTADO ' + numero++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
const sendm =  crls.sendMessage(
m.chat, 
{
text: "\n\n*_DATOS BUSCADOS_*",
footer: botname,
title: `AQUÍ ESTÁ SU RESULTADO DE *${text}* _seleccione la canción o el video a continuación_`,
buttonText: "YT MUSIC",
sections
}, { quoted : m })
}
break
case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                   reply(mess.wait)
                  if (!text) throw `Ejemplo : ${prefix + command} Whisky and Spice`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.description}\n*SUBIDO HACE:* ${i.ago}\n*CANAL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURACIÓN:* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  crls.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `Hola ${pushname} Aquí están los resultados de búsqueda de ytsaudio`,
                        buttonText: "LISTA DE AUDIOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'ytsvideo': case 'ytsearchvideo': {
               if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                  reply(mess.wait)
                  if (!text) throw `Ejemplo : ${prefix + command} La MVP`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp4 ${i.url}`,
                      description: `${i.description}\n*SUBIDO HACE:* ${i.ago}\n*CANAL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURACIÓN* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  crls.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `Hola ${pushname} *Aquí están los resultados de búsqueda de ytsvideo*`,
                        buttonText: "LISTA DE VÍDEOS",
                        sections
                        }, { quoted : m })
                        }
                    break

case 'frases':
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
				const trut =['El Hombre Superior es consciente de la Rectitud, el hombre inferior es consciente de la ventaja.\nConfucius','Sé cortés con todos, pero íntimo con pocos, y deja que esos pocos sean bien probados antes de darles tu confianza.\nGeorge Washington','Si te rompes el cuello, si no tienes nada para comer, si tu casa está en llamas, entonces tienes un problema. Todo lo demás son inconvenientes.\n Robert Fulghum','El pasado no tiene poder para impedir que estés presente ahora. Solo tu queja sobre el pasado puede hacer eso.\n Eckhart Tolle', 'La mejor manera de vivir con honor en este mundo es ser lo que pretendemos ser.\n Socrates', 'Por muchas palabras santas que leas, por muchas que hables, ¿de qué te servirán si no las pones en práctica?\n Buddha', 'La pasión por la política suele surgir de una necesidad insaciable, ya sea de poder, de amistad y adulación, o de una combinación de ambas\n Fawn M. Brodie', 'Nadie puede hacerte sentir inferior sin tu consentimiento.\nEleanor Roosevelt', 'Mucha sabiduría a menudo va con pocas palabras.\n Sophocles','La alegría es el mejor maquillaje.\n Anne Lamott ' ]
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://telegra.ph/file/deb403c846d26238d8686.jpg`)
			crls.sendMessage(m.chat, {image: truteh, caption: '*Frases...*\n\n'+ ttrth, quoted: m,contextInfo: { externalAdReply:{
        title:"ī.am/𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩",
        body:"𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇-MD",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync(`./verificado.jpg`) ,
        mediaUrl:`https://youtu.be/gRsMrx_eHTM`, 
        sourceUrl: `https://youtu.be/gRsMrx_eHTM` }}}, {quoted: m})
break                                         
/*FIN PRUEBAS*/   
            
            case prefix+'creargp':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Ejemplo* : #creargp nombregp`)
let cret = await crls.groupCreate(args.join(" "), [])
let response = await crls.groupInviteCode(cret.id)
teks = `  「 *CREADOR DE GRUPO* 」

_▸ nombre : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} _

https://chat.whatsapp.com/${response}
`
m.reply(teks)
break
case 'stikfilter': case 'stickerfilter': case 'filterstik':{
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
const uploadImage = require('./lib/uploader2')
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']
  let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
*Usa:* ${prefix + command} <Nombre del efecto>
*Ejemplo:* ${prefix + command} invert

*Lista de efectos:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Ninguna imagen especificada'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} no soportado`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
  crls.sendImageAsSticker(m.chat, apiUrl, m, { packname: global.packname, author: global.author })
}
break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Sin hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'No tiene permiso para eliminar este comando de sticker'              
                delete global.db.data.sticker[hash]
                m.reply(`listo!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista Hash*
Info: *bold* hash está bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                crls.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Responde mensaje!'
                if (!m.quoted.fileSha256) throw 'SHA256 Falta hash'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash no se encuentra en la base de datos'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('listo!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Responde al mensaje que desea guardar en la base de datos'
                if (!text) throw `Ejemplo : ${prefix + command} nombre file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' se ha incluido en la lista de mensajes`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Se ha agregado correctamente un mensaje en la lista de mensajes como '${text}'
    
Acceso con ${prefix}getmsg ${text}

Ver la lista Mensaje con ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Ejemplo : ${prefix + command} nombre file\n\nVer una lista de mensajes con ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' no aparece en la lista de mensajes`
                crls.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LISTA DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Nombre :* ${i.nama}\n⬡ *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' no aparece en la lista de mensajes`)
		delete msgs[text.toLowerCase()]
		m.reply(`Eliminado correctamente '${text}' de la lista de mensajes`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: 'Empezar' }, type: 1 }
                ]
                crls.sendButtonText(m.chat, buttons, `\`\`\`Hola ${await crls.getName(m.sender)} Bienvenido al chat anónimo\n\nHaga clic en el botón de abajo para encontrar un socio\`\`\``, crls.user.name, m)
            }
			break
            case 'salirc': case 'leave': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Empezar' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `\`\`\`No estás en una sesión anónima, presiona el botón para encontrar pareja \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await crls.sendText(other, `\`\`\`El socio ha abandonado la sesión anónima\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'empezarc': case 'start': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'fuerac', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `\`\`\`Todavía está en una sesión anónima, presione el botón de abajo para finalizar su sesión anónima\`\`\``, crls.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Siguiente' }, type: 1 },
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await crls.sendButtonText(room.a, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, crls.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await crls.sendButtonText(room.b, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, crls.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `\`\`\`Por favor, espere, buscando un socio\`\`\``, crls.user.name, m)
                }
                break
            }
            case 'next': case 'siguientec': {
                if (m.isGroup) return reply('Las características no se pueden usar para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Empezar' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `\`\`\`No estás en una sesión anónima, presiona el botón para encontrar pareja\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await crls.sendText(other, `\`\`\`El socio ha abandonado la sesión anónima\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Siguiente' }, type: 1 },
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await crls.sendButtonText(room.a, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, crls.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await crls.sendButtonText(room.b, buttons, `\`\`\`Socio encontrado con éxito, ahora puede enviar un mensaje\`\`\``, crls.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'salirc', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await crls.sendButtonText(m.chat, buttons, `\`\`\`Por favor, espere, buscando un socio\`\`\``, crls.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                crls.public = true
                m.reply('Cambio exitoso al uso público')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                crls.public = false
                m.reply('Cambio exitoso al uso propio')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Os Release:* ${os.release()}
ᴏꜱ tipo:*   ${os.type()}
directorio:*  ${os.homedir()}
plataforma :* ${os.platform()} 
memoria free:* ${os.freemem()}
memoria total:* ${os.totalmem()}
versión:* ${os.version()}
dispositivo :* ${os.hostname()}
 
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milisegundos_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_memoria usada NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Uso total de cpu_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testeando velocidad...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'runtime': {
const templateMessage = {
text: '*Tiempo de actividad👀*',footer: `${runtime(process.uptime())}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Tik Tok', 
url: `${tiktok}`
}
},
],
}
const sendm = crls.sendMessage(from, templateMessage)
}
break
case 'latencia': {
let timestamp = speed()
let latensi = speed() - timestamp
const templateMessage = {
text: '*Latencia 🧞*',footer: `${latensi.toFixed(4)} segundos`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Sigueme!', 
url: `${tiktok}`
}
},
],
}
const sendm = crls.sendMessage(from, templateMessage)
}
break
            case 'owner': case 'creator': {
                crls.sendContact(m.chat, global.owner, fkontak)
const templateMessage = {
text: 'Mi señor, mi dueño',footer: `© ${ownername}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Tik Tok', 
url: `${tiktok}`
}
},
],
}
const sendm = crls.sendMessage(from, templateMessage)
            }
            break
 /*test*/

 /*test*/           
            
            
            
            
            
            
            
            case 'playstore': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Ejemplo : ${prefix + command} Apex Legends`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `⭔ Playstore Buscqueda de : ${text}\n\n`
            for (let i of res.result) {
            teks += `⭔ Nombre : ${i.name}\n`
            teks += `⭔ Link : ${i.link}\n`
            teks += `⭔ Developer : ${i.developer}\n`
            teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            m.reply(teks)
            }
            break
            case 'gsmarena': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
            if (!text) throw `Ejemplo : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Tamaño: ${ukuran}
⭔ Tipo: ${type}
⭔ Almacenamiento: ${storage}
⭔ Monitor: ${display}
⭔ Pulgadas: ${inchi}
⭔ Píxel: ${pixel}
⭔ Píxel de vídeo: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Batería: ${batrai}
⭔ Marca de batería: ${merek_batre}
⭔ Detalle: ${detail}`
            crls.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'teste': case 'test': case 'testing': case 'tested':{
                respon = `_*🇪🇦 : Test realizado con exito *_.
_*🇬🇧 : Test carried out successfully *_.
_*🇮🇩 : Tes berhasil dilakukan *_.
_*🇯🇵 : テストは正常に実行されました *_.

*[   INFORMACIÓN   ]*
_⫹⫺ Tu nombre : ${pushname}_
_⫹⫺ Librería : Baileys-Md_
_⫹⫺ Version : 5.0.0_
_⫹⫺ Lenguaje : Javascript_
_⫹⫺ Autor : ꪶ͢𝙲𝚛𝚕𝚜 𝙾𝚙𝚜ꫂ⁸⁸⁸_
_⫹⫺ Datos del Servidor :  ${moment.tz('America/Guayaquil').format('DD/MM/YY')}_
_⫹⫺ Tiempo del Servidor : ${moment.tz('America/Guayaquil').format('HH:mm:ss')}_`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: respon,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/botimg.jpg')},
                            hydratedFooterText: `𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'TIKTOK',
                                    url: 'https://tiktok.com/@theprivmen'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'CANAL YOUTUBE',
                                    url: 'https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'REGLAS',
                                    id: `${prefix}rules`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                crls.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
	    case 'donar': {
                crls.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/149e775adfaa5e719d3a5.png' }, caption: `
                *❒ 「 Donaciones 」 ❒

→Hola Usuario de 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇 
Si deseas hacer una donación para invitarle una Taza de café a mi creador se agradecería mucho.

→Al momento de Donarme, se te otorgará unos beneficios a manera de agradecimiento, ya que tu ayuda es muy importante para mantener al bot actualizado y en mantenimiento.


•Se te Otorgará el Premium 💵
¿Para qué sirve?
→Este bot usa un sistema que limita a los usuarios gratuitos a un uso de 30 comandos cada 12 horas, (no en todos los comandos), El usuarios Premium no tendrá limite en ningun comando.


•El bot se unirá a tu grupo
¿Cómo Será?
→Se te otorgará la posibilidad de que puedas añadir el bot a un grupo tuyo, y podras disfrutar de el, Siempre que se mantenga activo!


Para saber sobre más beneficios por donar habla con el Owner: wa.me/593991398786


De antemano se agradece tú apoyo a este proyecto, ya que me ayudas a que siga vivo y se mantenga con el pasar del tiempo.!


El uso de 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇 es 100% gratuito, tú donación solo ayudará a mejorarlo a cambio de beneficios.

¡Muchos gracias! Para ustedes, amigos usuarios y algunas personas que también ayudaron en el proyecto. Att 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇.*` 
}, { quoted: m })
            }
            break
	    case 'rcompra': {
                crls.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/149e775adfaa5e719d3a5.png' }, caption: `
*❒ 「 Terminos de Compra 」 ❒

→Al momento de Efectuar la compra de 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇 se tomarán en cuenta los siguientes aspectos

→Al momento de Donarme, se te otorgará unos beneficios a manera de agradecimiento, ya que tu ayuda es muy importante para mantener al bot actualizado y en mantenimiento.


1•_ Se verificará que el pago sea legítimo, con comprobante. todo al creador del bot.

2•_ Solo se dará la versión por la que hayas pagado.

3•_.El bot será completamente tuyo, y podrás disfrutar de los beneficios.

4•_No se aceptad devoluciones.

5•_ Comprueba los precios en ${prefix}comprarbot.

Al comprar este bot me estás apoyando a crecer y mantener este bot, Gracias de antemano.. Att 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇.*` 
}, { quoted: m })
            }
            break
            case 'listmenu': {
                let sections = [
                {
                title: "Apartados del bot >_<",
                rows: [
                {title: "⌲ 「 ALLMENU 」", rowId: `${prefix}menu`, description: `Mostrar todo el menú`}
                ]
                },
                {
                title: "Comprar El Bot >_<",
                rows: [
                {title: "⌲ 「 Buy Me 」", rowId: `${prefix}comprarbot`, description: `Ahora puedes comprarme :D`}
                ]
                },
                {
                title: "Donaciones de Caridad >_<",
                rows: [
                {title: "⌲ 「 Donación 」", rowId: `${prefix}donar`, description: `apoyame para mantener este proyecto`}
                ]
                },
                {
                title: "Script privada >_<",
                rows: [
                {title: "⌲ 「 Script 」", rowId: `${prefix}sc`, description: `Bot encriptado para uso público.`}
                ]
                },
                {
                title: "Lista de menús del Bot >_<",
                rows: [
                {title: "⌲ 「 Convert Menu 」", rowId: `${prefix}convertmenu`, description: `Mostrar menú de conversión`},
                {title: "⌲ 「 Download Menu 」", rowId: `${prefix}downloadmenu`, description: `Mostrar el menú de descarga`},
                {title: "⌲ 「 Database Menu 」", rowId: `${prefix}mainmenu`, description: `Mostrar menú de base de datos`},
                {title: "⌲ 「 TextPro Menu 」", rowId: `${prefix}logomenu`, description: `Mostrar el menú de logos`},
                {title: "⌲ 「 Grupo Menu 」", rowId: `${prefix}groupmenu`, description: `Mostrar menú de grupo`},
                {title: "⌲ 「 Owner Menu 」", rowId: `${prefix}ownermenu`, description: `Mostrar menú de propietario`},
                {title: "⌲ 「 Random Menu 」", rowId: `${prefix}randommenu`, description: `Mostrar menú aleatorio`},
                {title: "⌲ 「 Voice Menu 」", rowId: `${prefix}voicemenu`, description: `Mostrar el menú del cambiador de voz`},
                ]
                },
                {
                title: "Actividad del bot >_<",
                rows: [
                {title: "⌲ 「 Runtime 」", rowId: `${prefix}runtime`, description: `click para mi tiempo activo`}
                ]
                },
                {
                title: "Información sobre el propietario? >_<",
                rows: [
                {title: "⌲ 「 Chat Owner 」", rowId: `${prefix}owner`, description: `Mostrar número de propietario de WhatsApp`}
                ]
                },
                {
                title: "Reglas del Bot >_<",
                rows: [
                {title: "⌲ 「 Reglas 」", rowId: `${prefix}rules`, description: `mostrando los terminos de uso del bot !!`}
                ]
                }
                ]
                crls.sendListMsg(m.chat, `Por favor seleccione el menú!`, crls.user.name, `Hola A Todos !`, `Click Aquí`, sections, m)
            }
            break
            //menus

case 'menu':
let timestamp = speed()
let latensi = speed() - timestamp
const botmd = "593991398786@s.whatsapp.net"
var monospace = '```'
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document','audio/mpeg','image/jpeg']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `${monospace}      𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇
       「  INFO BOT 」\n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘚𝘦𝘳𝘷𝘦𝘳 : ${conteocmd} \n 𝘛𝘰𝘵𝘢𝘭 𝘏𝘪𝘵 𝘛𝘰𝘥𝘢𝘺 : ${conteoscmds} \n Prefijo :  ${prefix} \n Nombre : ${botname}\n Owner : ${ownername}\n Runtime : ${runtime(process.uptime())}\n Librería : Baileys-Md\n\n   「 GRUPOS 」

001» ${prefix}linkgrupo
 
002» ${prefix}grupoinfo

003» ${prefix}listmenu

004» ${prefix}bug [reporte de bugs]

005» ${prefix}report [reportar bug]

006» ${prefix}ephemeral [opcion]

007» ${prefix}setppgc [imagen]

008» ${prefix}setname [text]

009» ${prefix}setdesc [text]

010» ${prefix}grupo [opcion]

011» ${prefix}editinfo [opcion]

012» ${prefix}add @user

013» ${prefix}kick @user

014» ${prefix}hidetag [text]

015» ${prefix}tagall [text]

016» ${prefix}antilink [on/off]

017» ${prefix}mute [on/off]

018» ${prefix}promote @user

019» ${prefix}demote @user

020» ${prefix}encuesta [text]

021» ${prefix}votopositivo

022» ${prefix}votonegativo

023» ${prefix}checkvoto

024» ${prefix}profile

025» ${prefix}deletevoto ${monospace}



${monospace}   「 DOWNLOAD 」

026» ${prefix}tiktok [url]

027» ${prefix}igdl [url]

028» ${prefix}instagram [url]

029» ${prefix}ytsvideo [name]

030» ${prefix}ytsvideo [name]

031» ${prefix}song [nombre]

032» ${prefix}ytmp3 [url]

033» ${prefix}ipinfo [ip]

034» ${prefix}ytmp4 [url] ${monospace}



${monospace}   「 NAVEGADOR 」

035» ${prefix}play [consulta]

036» ${prefix}ssweb [link]

037» ${prefix}ytsearch [titulos yt]

038» ${prefix}gitclone [repositorio]

039» ${prefix}yts [consulta]

040» ${prefix}animesearch [consulta] 

041» ${prefix}githubstalk [nickname]

042» ${prefix}google [consulta]

043» ${prefix}googleimg [consulta]

044» ${prefix}pinterest [consulta]

045» ${prefix}wallpaper [consulta]

046» ${prefix}wikimedia [consulta]

047» ${prefix}ytsearch [consulta]

048» ${prefix}ringtone [consulta] ${monospace}



${monospace}   「 RANDOM 」

049» ${prefix}coffe

050» ${prefix}imgpareja

051» ${prefix}avatar

052» ${prefix}nekoo

053» ${prefix}nekost

054» ${prefix}waifu (nsfw)

055» ${prefix}trap (nsfw)

056» ${prefix}blowjob(nsfw)

057» ${prefix}neko (nsfw)

058» ${prefix}loli

059» ${prefix}smug

060» ${prefix}simi

061» ${prefix}animestick

062» ${prefix}emoji 😝

063» ${prefix}kitzia

064» ${prefix}cry

065» ${prefix}kill

066» ${prefix}hug

067» ${prefix}pat

068» ${prefix}lick

069» ${prefix}kiss

070» ${prefix}bite

071» ${prefix}yeet

072» ${prefix}bully

073» ${prefix}bonk

074» ${prefix}wink

075» ${prefix}poke

076» ${prefix}nom

077» ${prefix}slap

078» ${prefix}smile

079» ${prefix}wave

080» ${prefix}awoo

081» ${prefix}blush

082» ${prefix}dogestick

083» ${prefix}glomp

084» ${prefix}happy

085» ${prefix}dance

086» ${prefix}cringe

087» ${prefix}cuddle

088» ${prefix}highfive

089» ${prefix}shinobu

090» ${prefix}megumin

091» ${prefix}handhold ${monospace}



${monospace}   「 MAKER 」
   
092» ${prefix}carcel [imagen]

093» ${prefix}3d-effect

094» ${prefix}retrowb

095» ${prefix}anonymous-neon

096» ${prefix}einstein

097» ${prefix}diploma

098» ${prefix}esfrase

099» ${prefix}sings

100» ${prefix}leonlogo

101» ${prefix}glitch

102» ${prefix}1917-style

103» ${prefix}3d-rubystone

104» ${prefix}3d-text-sub-zombie

105» ${prefix}3dengraved

106» ${prefix}3dluxury

107» ${prefix}3dlove

108» ${prefix}3dgolden

109» ${prefix}3dscifi

110» ${prefix}3dtext-effect

111» ${prefix}3dunderwater

112» ${prefix}3dwaterpipe

113» ${prefix}alice-league-of-kings

114» ${prefix}angel-wing-galaxy

115» ${prefix}anubis

116» ${prefix}arch-crossfire

117» ${prefix}art-shader

118» ${prefix}assassins-creed

119» ${prefix}azzenka-league-of-kings

120» ${prefix}birthday-cards

121» ${prefix}birthday-greeting

122» ${prefix}birthday-roses

123» ${prefix}black-metal

124» ${prefix}blood-frosted

125» ${prefix}blood-text

126» ${prefix}blue-effect

127» ${prefix}blue-glitter

128» ${prefix}brickwall

129» ${prefix}brokentext

130» ${prefix}bubble-effect

140» ${prefix}bulb-effect

141» ${prefix}circuit 

142» ${prefix}dark-gold-metal

143» ${prefix}color-fireworks

144» ${prefix}cool-metal

145» ${prefix}decorated-cookie

146» ${prefix}deluxe-gold

147» ${prefix}dinamo

148» ${prefix}deluxe-silver

149» ${prefix}double-exposure

150» ${prefix}dragon-fire

151» ${prefix}eroded-metal

152» ${prefix}firework

153» ${prefix}fox-crossfire

154» ${prefix}fun-certify1

156» ${prefix}fun-certify2

157» ${prefix}futuristic

158» ${prefix}galaxy-effect2

159» ${prefix}galaxy-effect

160» ${prefix}galaxy-angel

161» ${prefix}galaxy-text

162» ${prefix}galaxy-text-3

163» ${prefix}gankk-league-of-kings

164» ${prefix}genji-overwatch

165» ${prefix}glossy

166» ${prefix}glossy-bluemetal

167» ${prefix}glossy-carbon

168» ${prefix}glossy-chrome

169» ${prefix}gold-avenger

170» ${prefix}gold-barcar

171» ${prefix}gold-batman

172» ${prefix}gold-fox

173» ${prefix}gold-effect

174» ${prefix}gold-bird2

175» ${prefix}gold-eagle

176» ${prefix}gold-glitter

177» ${prefix}gold-lion

178» ${prefix}gold-lion2

179» ${prefix}gold-star

180» ${prefix}gold-tiger

181» ${prefix}golden-letter

182» ${prefix}gr-crossfire

183» ${prefix}graffiti-color

184» ${prefix}graffiti-text3

185» ${prefix}graffiti-text4

186» ${prefix}graffiti-text5

187» ${prefix}graffiti-text8

188» ${prefix}heart-birthday

189» ${prefix}hanzo-overwatch

190» ${prefix}greenhorror

191» ${prefix}halloween-fire

192» ${prefix}heart-cups

193» ${prefix}green-brush

194» ${prefix}hero3-crossfire

195» ${prefix}holographic

196» ${prefix}light-text

197» ${prefix}lend-text

198» ${prefix}ledtext

199» ${prefix}lol-ahri

200» ${prefix}logo-galaxy

201» ${prefix}lol-fizz

202» ${prefix}lol-ezreal-and-shen

203» ${prefix}lol-fiora

204» ${prefix}lol-draven

204» ${prefix}lol-jinx

205» ${prefix}lol-kalista

206» ${prefix}lol-khazix

207» ${prefix}lol-kogmaw

208» ${prefix}lol-leesin

209» ${prefix}lol-lux

210» ${prefix}lol-master-yi

211» ${prefix}lol-miss-fortune

212» ${prefix}lol-nidalee

213» ${prefix}lol-quinn

214» ${prefix}lol-sona

215» ${prefix}lol-riven

216» ${prefix}lol-talon

217» ${prefix}lol-thresh

218» ${prefix}lol-vayne

219» ${prefix}machines-effect

220» ${prefix}lol-yasuo

221» ${prefix}lol-zed

222» ${prefix}lol-wukong

223» ${prefix}magic-text

224» ${prefix}mei-overwatch

225» ${prefix}matrix-text

226» ${prefix}magmatext

227» ${prefix}metal-lion-2

228» ${prefix}metal-headshot

229» ${prefix}metal-avenger

230» ${prefix}metal-realadrid

231» ${prefix}metal-star

232» ${prefix}metal-superman

233» ${prefix}metal-text-effect

234» ${prefix}metallic-letter

235» ${prefix}metalic

236» ${prefix}metal-wolf-2

237» ${prefix}mganga-league-of-kings

238» ${prefix}miniontext

239» ${prefix}modern-gold-3

240» ${prefix}modern-gold-4

241» ${prefix}modern-gold-5-pro

242» ${prefix}modern-gold-green

243» ${prefix}modern-gold-purple

244» ${prefix}modern-gold-red

245» ${prefix}modern-gold-sliver

246» ${prefix}modern-goldred

247» ${prefix}neon

248» ${prefix}neon-2

249» ${prefix}neon-brightblue

250» ${prefix}neon-effects

251» ${prefix}neon-light-galaxy

252» ${prefix}neon-satin

253» ${prefix}neondevil

254» ${prefix}neonlight

255» ${prefix}neontext-light

256» ${prefix}paper-cut

257» ${prefix}paperart

258» ${prefix}rainbow-effect

259» ${prefix}reaper-overwatch

260» ${prefix}red-birthdaycake

261» ${prefix}redhot-metal

262» ${prefix}resht-league-of-kings

263» ${prefix}science

264» ${prefix}sfg-crossfire

265» ${prefix}sketch ${monospace}



${monospace}   「 GAMES 」

266» ${prefix}amigos

267» ${prefix}gay

268» ${prefix}textoinvert [texto]

269» ${prefix}traductor [traductor]

270» ${prefix}sitiosx

271» ${prefix}instagram

272» ${prefix}pareja

273» ${prefix}puto

274» ${prefix}lesbian

275» ${prefix}gil

276» ${prefix}idiota

277» ${prefix}cerdo

278» ${prefix}hermoso

279» ${prefix}elegante

280» ${prefix}hachero

281» ${prefix}estupendo

282» ${prefix}noob

283» ${prefix}pequeño

284» ${prefix}sexy

285» ${prefix}hot

286» ${prefix}math [modo]

287» ${prefix}suitpvp [@tag] ${monospace}



${monospace}   「 CONVERTER 」

288» ${prefix}toimage

289» ${prefix}take

290» ${prefix}attp

291» ${prefix}attp1

292» ${prefix}attp2

293» ${prefix}attp3

294» ${prefix}attp4

295» ${prefix}attp5

296» ${prefix}attp6

297» ${prefix}ttp

298» ${prefix}ttpcustom color|texto

299» ${prefix}removebg

300» ${prefix}smeme2 [texto|texto]

301» ${prefix}smeme

302» ${prefix}sticker

303» ${prefix}emojimix 😝+😸

304» ${prefix}emojimix2 🙄

305» ${prefix}tovideo

306» ${prefix}togif [stickerGif]

307» ${prefix}tourl [imagen]

308» ${prefix}tovn [video]

309» ${prefix}tomp3 [video]

310» ${prefix}toaudio [video]

311» ${prefix}ebinary

312» ${prefix}dbinary

313» ${prefix}styletext ${monospace}



${monospace}   「 DATABASE 」

314» ${prefix}solicitar

315» ${prefix}ping

316» ${prefix}test

317» ${prefix}owner

318» ${prefix}Menu

319» ${prefix}delete

320» ${prefix}infochat

321» ${prefix}quoted

322» ${prefix}listpc

323» ${prefix}listgc

324» ${prefix}listonline

325» ${prefix}setcmd

326» ${prefix}listcmd

327» ${prefix}delcmd

328» ${prefix}lockcmd

329» ${prefix}addmsg

330» ${prefix}listmsg

331» ${prefix}getmsg

332» ${prefix}delmsg ${monospace}



${monospace}   「 ALTERADOR VN 」

333» ${prefix}bass

334» ${prefix}blown

335» ${prefix}deep

336» ${prefix}saturado

337» ${prefix}fast

338» ${prefix}fat

339» ${prefix}nightcore

340» ${prefix}reversa

341» ${prefix}lento

342» ${prefix}robot

343» ${prefix}suave

344» ${prefix}ardilla ${monospace}



${monospace}   「 OWNER 」
   
345» ${prefix}mode

346» ${prefix}react [emoji]

347» ${prefix}join [link]

348» ${prefix}chat [opcion]

349» ${prefix}leave

350» ${prefix}creditos

351» ${prefix}block @user

352» ${prefix}unblock @user

353» ${prefix}bcgroup [text]

354» ${prefix}bcall [text]

355» ${prefix}setppbot [imagen]

356» ${prefix}setexif

357» ${prefix}autoadmin

357» ${prefix}deleteadmin

358» ${prefix} $

359» ${prefix} > ${monospace}



${monospace}   「 NEWS 」
   
360» ${prefix}animesearch2

361» ${prefix}coming soon

362» ${prefix}angie

363» ${prefix}viewfinder

364» ${prefix}aria

365» ${prefix}attic

366» ${prefix}black-and-white

367» ${prefix}eva

368» ${prefix}duotone

369» ${prefix}contrast-bandw

379» ${prefix}chrome-1970

371» ${prefix}movie

372» ${prefix}light-leak

373» ${prefix}japanese

374» ${prefix}sphinx

375» ${prefix}golden-hour

376» ${prefix}lisatxt 

377» ${prefix}spotify [link]

378» ${prefix}totag [reply msj]

379» ${prefix}npmsearch [text]

380» ${prefix}searchgrup [text]

381» ${prefix}igdl [mantenimiento]

381» ${prefix}textchat [solo owner] 

382» ${prefix}ipinfo [Ip] 

383» ${prefix}ipmap [ip] 

383» ${prefix}setmenu [owner] 

384» ${prefix}resize [300x300] 

385» ${prefix}getgcjid [solo grupo] 

385» ${prefix}stickerfilter [solo grupo] 



   「 TANKS TO 」

➣  ║▌│█║▌│ █║▌│█│║▌║
➣  ║▌│█║▌│ █║▌│█│║▌║

➣ Copyright © ঔৣ͜͡𝘿𝙖͢𝙙𝙙͢𝙮 愛 2022

${monospace}`
let buttons = [
{buttonId: `${prefix}comprarbot`, buttonText: {displayText: 'Comprar Bot'}, type: 1},
{buttonId: `${prefix}listmenu`, buttonText: {displayText: 'Menu Lista'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./media/botimg.jpg'), 
fileName: `Bot by ī.am/𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩`, 
mimetype: `application/${bykir}`,
jpegThumbnail: thumbpdf,
caption: mbc,
fileLength: "9999999999999",
pageCount: "-10000",
mentions:[sender, botmd],
footer: `_By @${botmd.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender, botmd],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hola ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "IMAGE",
"mediaUrl": 'https://www.instagram.com/p/CVVlkvWLmUa/?igshid=YmMyMTA2M2Y=',
"sourceUrl": 'https://chat.whatsapp.com/Kz1emBsfwVnCGXffAlYSeB'
}}
}
crls.sendMessage(m.chat, buttonMessage, { quoted: {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "17608914335-1625305606@g.us" } : {}) 
               },
    message: { 
       "extendedTextMessage": {
                "text":'by CARLOS',
                "title": '𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇',
                'jpegThumbnail': fs.readFileSync('./verificado.jpg')
             }
           } 
          } })

break


            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                m.reply(mess.success)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CAMBIAR MENU BOT",
                rows: [
                {title: "Imagen de plantilla", rowId: `setmenu templateImage`, description: `Cambiar el bot de menú a Imagen de plantilla`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Cambiar el bot de menú a Vídeo de plantilla`},
                {title: "Plantilla Gif", rowId: `setmenu templateGif`, description: `Cambiar el bot de menú a Gif de plantilla`},
                {title: "Plantilla Mensaje", rowId: `setmenu templateMessage`, description: `Cambiar el bot de menú a Mensaje de plantilla`},
                {title: "Plantilla Localización", rowId: `setmenu templateLocation`, description: `Cambiar el bot de menú a Ubicación de plantilla`}
                ]
                },
                ]
                crls.sendListMsg(m.chat, `Please select the menu you want to change!`, crls.user.name, `Hello Owner !`, `Click Here`, sections, m)
                }
            }
            break
            case 'menugp': case 'grouomenu': case 'helpgroup': case 'groupm': {
               let anu = `   「 GRUPOS 」

001» ${prefix}linkgrupo
 
002» ${prefix}grupoinfo

003» ${prefix}autosticker

004» ${prefix}bug [reporte de bugs]

005» ${prefix}report [reportar bug]

006» ${prefix}ephemeral [opcion]

007» ${prefix}setppgc [imagen]

008» ${prefix}setname [text]

009» ${prefix}setdesc [text]

010» ${prefix}grupo [opcion]

011» ${prefix}editinfo [opcion]

012» ${prefix}add @user

013» ${prefix}kick @user

014» ${prefix}hidetag [text]

015» ${prefix}tagall [text]

016» ${prefix}antilink [on/off]

017» ${prefix}mute [on/off]

018» ${prefix}promote @user

019» ${prefix}demote @user

020» ${prefix}encuesta [text]

021» ${prefix}votopositivo

022» ${prefix}votonegativo

023» ${prefix}checkvoto

024» ${prefix}profile

025» ${prefix}deletevoto


`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'downloadmenu': {
              let anu = `      「 DOWNLOAD 」

026» ${prefix}tiktok [url]

027» ${prefix}song [name]

028» ${prefix}getgcjid 

029» ${prefix}ytsaudio [name]

030» ${prefix}ytsvideo [name]

031» ${prefix}savefrom [url]

032» ${prefix}ytmp3 [url]

033» ${prefix}play4 [url]

034» ${prefix}ytmp4 [url]




`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'searchmenu': {
               let anu = `   「 NAVEGADOR 」

035» ${prefix}play [consulta]

036» ${prefix}ssweb [link]

037» ${prefix}ytsearch [titulos yt]

038» ${prefix}play2 [consulta]

039» ${prefix}yts [consulta]

040» ${prefix}animesearch [consulta] 

041» ${prefix}githubstalk [nickname]

042» ${prefix}google [consulta]

043» ${prefix}googleimg [consulta]

044» ${prefix}pinterest [consulta]

045» ${prefix}wallpaper [consulta]

046» ${prefix}wikimedia [consulta]

047» ${prefix}ytsearch [consulta]

048» ${prefix}ringtone [consulta]


`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break 
                        case 'randommenu': {
               let anu = `   「 RANDOM 」

049» ${prefix}coffe

050» ${prefix}imgpareja

051» ${prefix}avatar

052» ${prefix}nekoo

053» ${prefix}nekost

054» ${prefix}waifu (nsfw)

055» ${prefix}trap (nsfw)

056» ${prefix}blowjob(nsfw)

057» ${prefix}neko (nsfw)

058» ${prefix}loli

059» ${prefix}smug

060» ${prefix}simi

061» ${prefix}animestick

062» ${prefix}emoji 😝

063» ${prefix}kitzia

064» ${prefix}cry

065» ${prefix}kill

066» ${prefix}hug

067» ${prefix}pat

068» ${prefix}lick

069» ${prefix}kiss

070» ${prefix}bite

071» ${prefix}yeet

072» ${prefix}bully

073» ${prefix}bonk

074» ${prefix}wink

075» ${prefix}poke

076» ${prefix}nom

077» ${prefix}slap

078» ${prefix}smile

079» ${prefix}wave

080» ${prefix}awoo

081» ${prefix}blush

082» ${prefix}dogestick

083» ${prefix}glomp

084» ${prefix}happy

085» ${prefix}dance

086» ${prefix}cringe

087» ${prefix}cuddle

088» ${prefix}highfive

089» ${prefix}shinobu

090» ${prefix}megumin

091» ${prefix}handhold


`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'logomenu': {
               let anu = `   「 MAKER 」
   
092» ${prefix}carcel [imagen]

093» ${prefix}3d-effect

094» ${prefix}retrowb

095» ${prefix}anonymous-neon

096» ${prefix}einstein

097» ${prefix}diploma

098» ${prefix}esfrase

099» ${prefix}sings

100» ${prefix}leonlogo

101» ${prefix}glitch

102» ${prefix}1917-style

103» ${prefix}3d-rubystone

104» ${prefix}3d-text-sub-zombie

105» ${prefix}3dengraved

106» ${prefix}3dluxury

107» ${prefix}3dlove

108» ${prefix}3dgolden

109» ${prefix}3dscifi

110» ${prefix}3dtext-effect

111» ${prefix}3dunderwater

112» ${prefix}3dwaterpipe

113» ${prefix}alice-league-of-kings

114» ${prefix}angel-wing-galaxy

115» ${prefix}anubis

116» ${prefix}arch-crossfire

117» ${prefix}art-shader

118» ${prefix}assassins-creed

119» ${prefix}azzenka-league-of-kings

120» ${prefix}birthday-cards

121» ${prefix}birthday-greeting

122» ${prefix}birthday-roses

123» ${prefix}black-metal

124» ${prefix}blood-frosted

125» ${prefix}blood-text

126» ${prefix}blue-effect

127» ${prefix}blue-glitter

128» ${prefix}brickwall

129» ${prefix}brokentext

130» ${prefix}bubble-effect

140» ${prefix}bulb-effect

141» ${prefix}circuit 

142» ${prefix}dark-gold-metal

143» ${prefix}color-fireworks

144» ${prefix}cool-metal

145» ${prefix}decorated-cookie

146» ${prefix}deluxe-gold

147» ${prefix}dinamo

148» ${prefix}deluxe-silver

149» ${prefix}double-exposure

150» ${prefix}dragon-fire

151» ${prefix}eroded-metal

152» ${prefix}firework

153» ${prefix}fox-crossfire

154» ${prefix}fun-certify1

156» ${prefix}fun-certify2

157» ${prefix}futuristic

158» ${prefix}galaxy-effect2

159» ${prefix}galaxy-effect

160» ${prefix}galaxy-angel

161» ${prefix}galaxy-text

162» ${prefix}galaxy-text-3

163» ${prefix}gankk-league-of-kings

164» ${prefix}genji-overwatch

165» ${prefix}glossy

166» ${prefix}glossy-bluemetal

167» ${prefix}glossy-carbon

168» ${prefix}glossy-chrome

169» ${prefix}gold-avenger

170» ${prefix}gold-barcar

171» ${prefix}gold-batman

172» ${prefix}gold-fox

173» ${prefix}gold-effect

174» ${prefix}gold-bird2

175» ${prefix}gold-eagle

176» ${prefix}gold-glitter

177» ${prefix}gold-lion

178» ${prefix}gold-lion2

179» ${prefix}gold-star

180» ${prefix}gold-tiger

181» ${prefix}golden-letter

182» ${prefix}gr-crossfire

183» ${prefix}graffiti-color

184» ${prefix}graffiti-text3

185» ${prefix}graffiti-text4

186» ${prefix}graffiti-text5

187» ${prefix}graffiti-text8

188» ${prefix}heart-birthday

189» ${prefix}hanzo-overwatch

190» ${prefix}greenhorror

191» ${prefix}halloween-fire

192» ${prefix}heart-cups

193» ${prefix}green-brush

194» ${prefix}hero3-crossfire

195» ${prefix}holographic

196» ${prefix}light-text

197» ${prefix}lend-text

198» ${prefix}ledtext

199» ${prefix}lol-ahri

200» ${prefix}logo-galaxy

201» ${prefix}lol-fizz

202» ${prefix}lol-ezreal-and-shen

203» ${prefix}lol-fiora

204» ${prefix}lol-draven

204» ${prefix}lol-jinx

205» ${prefix}lol-kalista

206» ${prefix}lol-khazix

207» ${prefix}lol-kogmaw

208» ${prefix}lol-leesin

209» ${prefix}lol-lux

210» ${prefix}lol-master-yi

211» ${prefix}lol-miss-fortune

212» ${prefix}lol-nidalee

213» ${prefix}lol-quinn

214» ${prefix}lol-sona

215» ${prefix}lol-riven

216» ${prefix}lol-talon

217» ${prefix}lol-thresh

218» ${prefix}lol-vayne

219» ${prefix}machines-effect

220» ${prefix}lol-yasuo

221» ${prefix}lol-zed

222» ${prefix}lol-wukong

223» ${prefix}magic-text

224» ${prefix}mei-overwatch

225» ${prefix}matrix-text

226» ${prefix}magmatext

227» ${prefix}metal-lion-2

228» ${prefix}metal-headshot

229» ${prefix}metal-avenger

230» ${prefix}metal-realadrid

231» ${prefix}metal-star

232» ${prefix}metal-superman

233» ${prefix}metal-text-effect

234» ${prefix}metallic-letter

235» ${prefix}metalic

236» ${prefix}metal-wolf-2

237» ${prefix}mganga-league-of-kings

238» ${prefix}miniontext

239» ${prefix}modern-gold-3

240» ${prefix}modern-gold-4

241» ${prefix}modern-gold-5-pro

242» ${prefix}modern-gold-green

243» ${prefix}modern-gold-purple

244» ${prefix}modern-gold-red

245» ${prefix}modern-gold-sliver

246» ${prefix}modern-goldred

247» ${prefix}neon

248» ${prefix}neon-2

249» ${prefix}neon-brightblue

250» ${prefix}neon-effects

251» ${prefix}neon-light-galaxy

252» ${prefix}neon-satin

253» ${prefix}neondevil

254» ${prefix}neonlight

255» ${prefix}neontext-light

256» ${prefix}paper-cut

257» ${prefix}paperart

258» ${prefix}rainbow-effect

259» ${prefix}reaper-overwatch

260» ${prefix}red-birthdaycake

261» ${prefix}redhot-metal

262» ${prefix}resht-league-of-kings

263» ${prefix}science

264» ${prefix}sfg-crossfire

265» ${prefix}sketch



`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'funmenu': {
                let anu = `   「 GAMES 」

266» ${prefix}amigos

267» ${prefix}gay

268» ${prefix}textoinvert [texto]

269» ${prefix}traductor [traductor]

270» ${prefix}sitiosx

271» ${prefix}instagram

272» ${prefix}pareja

273» ${prefix}puto

274» ${prefix}lesbian

275» ${prefix}gil

276» ${prefix}idiota

277» ${prefix}cerdo

278» ${prefix}hermoso

279» ${prefix}elegante

280» ${prefix}hachero

281» ${prefix}estupendo

282» ${prefix}noob

283» ${prefix}pequeño

284» ${prefix}sexy

285» ${prefix}hot

286» ${prefix}math [modo]

287» ${prefix}suitpvp [@tag]


`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break      
                        case 'convertmenu': {
               let anu = `   「 CONVERTER 」

288» ${prefix}toimage

289» ${prefix}take

290» ${prefix}attp

291» ${prefix}attp1

292» ${prefix}attp2

293» ${prefix}attp3

294» ${prefix}attp4

295» ${prefix}attp5

296» ${prefix}attp6

297» ${prefix}ttp

298» ${prefix}ttpcustom color|texto

299» ${prefix}removebg

300» ${prefix}smeme2 [texto|texto]

301» ${prefix}smeme

302» ${prefix}sticker

303» ${prefix}emojimix 😝+😸

304» ${prefix}emojimix2 🙄

305» ${prefix}tovideo

306» ${prefix}togif [stickerGif]

307» ${prefix}tourl [imagen]

308» ${prefix}tovn [video]

309» ${prefix}tomp3 [video]

310» ${prefix}toaudio [video]

311» ${prefix}ebinary

312» ${prefix}dbinary

313» ${prefix}styletext



`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'mainmenu': {
               let anu = `   「 DATABASE 」

314» ${prefix}solicitar

315» ${prefix}ping

316» ${prefix}test

317» ${prefix}owner

318» ${prefix}Menu

319» ${prefix}delete

320» ${prefix}infochat

321» ${prefix}quoted

322» ${prefix}listpc

323» ${prefix}listgc

324» ${prefix}listonline

325» ${prefix}setcmd

326» ${prefix}listcmd

327» ${prefix}delcmd

328» ${prefix}lockcmd

329» ${prefix}addmsg

330» ${prefix}listmsg

331» ${prefix}getmsg

332» ${prefix}delmsg

`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'voicemenu': {
               let anu = `   「 ALTERADOR VN 」

333» ${prefix}bass

334» ${prefix}blown

335» ${prefix}deep

336» ${prefix}saturado

337» ${prefix}fast

338» ${prefix}fat

339» ${prefix}nightcore

340» ${prefix}reversa

341» ${prefix}lento

342» ${prefix}robot

343» ${prefix}suave

344» ${prefix}ardilla



`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'ownermenu': {
               let anu = `
   「 OWNER 」
   
345» ${prefix}mode

346» ${prefix}react [emoji]

347» ${prefix}join2 [link]

348» ${prefix}chat [opcion]

349» ${prefix}leave

350» ${prefix}creditos

351» ${prefix}block @user

352» ${prefix}unblock @user

353» ${prefix}bcgroup [text]

354» ${prefix}bcall [text]

355» ${prefix}setppbot [imagen]

356» ${prefix}setexif

357» ${prefix} $

358» ${prefix} >

`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'rules': {
                let anu = `
❒ 「 Reglas y preguntas 」 ❒

1. No enviar spam. 🙅
Sanciones: *❎ ALERTA/BLOQUEO*

2. No me llames. ☎️
Sanciones: *❎ BLOQUEO + REPORTE*

3. No explotación laboral.😖
Sanciones: *BLOQUEO PERMANENTE*

🗯️ Bot no responde o lento para responder ?
➡️ Puede verse afectado por la red, la señal, prohibido por Whatsapp y alguna razón. Sigue obedeciendo las reglas‼️

🗯️ ¿Dónde puedo obtener el Script de este bot? ?
➡️ Este script aún es privado y nunca se ha comercializado, tenga cuidado al conocer a los estafadores..

🗯️ puedo agregar al grupo?
➡️ Por el momento, el bot está privado para agregar a grupos.

🗯️ ¿Cuál es el prefijo??
➡️ Este bot usa múltiples prefijos. Significa que puedes usar el prefijo #, . , Y otro prefijo razonable.

🗯️ Man, ¿cómo es que el propietario del bot no responde??
➡️ El propietario solo responde a familiares, amigos, reportes sobre el bot y problemas de error, no para personas rogando por scripts..


Si entiende las reglas, por favor escriba *menu* para comenzar!

⚠️ Todas las políticas y condiciones de 𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇 están en manos del propietario y todos los cambios de política, en cualquier momento, el propietario tiene derecho a revocar, bloquear usuarios(*﹏*) 

¡Muchos gracias! Para ustedes, amigos usuarios y algunas personas que también ayudaron en el proyecto. Att Carlos.
 😖🙏

`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
            case 'comprarbot': {
                let anu = `
┌────────┈❖
│「 Hola, ${pushname}👋 」
│「 ${timebro} 」
└┬─────────────┈❖
┌┤「 COMPRAR BOT 」
│└─────────────┈❖
│⭔ Bot 100% Completo 10$ usd
│⭔ Bot +50Cmd Sin mis Apis 3$ usd
│⭔ Bot +100Cmd Y Template Buttons 5$ usd
│⭔ Bot +200Cmd y Template + apis 7$ usd
└┬─────────────┈❖
┌┤「 PAGO 」
│└─────────────┈❖
│⭔ PayPal : ${global.paypal}
└┬─────────────┈❖
┌┤「 VENTAJAS 」
│└─────────────┈❖
│⭔Bot 100% Editable 
│⭔ Host Vps/Heroku/Oktote/BoxMineHost
│⭔100% tuyo
│⭔ Comandos funcionales
│⭔ Antilink
│⭔ Welcome
│⭔ Despedida
└┬─────────────┈❖
┌┤「 SISTEMA 」
│└─────────────┈❖
│⭔ Enviar prueba de pago » y el » Bot es tuyo
└──────────────┈❖
`
                let btn = [{
                                urlButton: {
                                    displayText: 'PayPal',
                                    url: 'https://www.paypal.me/CarlosTwT'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Reglas de Compra',
                                    id: `${prefix}rcompra`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donar',
                                    id: `${prefix}donar`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Vcard Owner',
                                    id: `${prefix}owner`
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
            case 'sc': {
                let anu = `
❒ 「 Base 」 ❒


DaddyBot: https://github.com/CarlosTwT/DaddyMD 
`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/DaddyMD'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
                        case 'entrargp': {
                let anu = `❒ 「 Como añadirme a grupo 」 ❒

1. Es necesario tener un grupo de +20 miembros debido a que muchos grupos lo usan para pruebas...

2. Solo es permitido 1 grupo por persona, debido a que el bot puede ponerse lento por varios grupos

3. Si haz unido el bot pero no te funciona... Se debe a que se están añadiendo cosas y estan en privado

4. La bienvenida del bot es activa para todos los grupos, no se puede desactivar de ninguna manera!!

5. El bot funciona sin prefijo, pero puedes añadir un prefijo como *#* funciona de igual manera

6. Si lo usas en grupo evita hacer spam en el privado del bot.
`
                let btn = [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://github.com/CarlosTwT/MdSIMPLE'
                                }
                            }, {
                                callButton: {
                                    displayText: 'número Owner',
                                    phoneNumber: '+593 99 139 8786'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        crls.send5ButImg(m.chat, anu, crls.user.name, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        crls.send5ButGif(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        crls.send5ButVid(m.chat, anu, crls.user.name, global.pp_video, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        crls.send5ButMsg(m.chat, anu, crls.user.name, btn)
                        } else if (setbot.templateLocation) {
                        crls.send5ButLoc(m.chat, anu, crls.user.name, global.thumb, btn)
                        }
                     }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    crls.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
