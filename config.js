/*
   * Create By 𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩ priv
   * Contactame en Wa wa.me/593991398786
   * Follow https://github.com/CarlosTwT
   * Gracias a Hisoka por la base!
   * Este script es completamente *GRATIS* se precavido de los estafadores.
   * Si intentas comercializar este script podrías tener problemas legales!   
*/

const fs = require('fs')
const chalk = require('chalk')

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	harn: 'https://hardianto.xyz',
	xteam: 'https://api.xteam.xyz',
	ryu: 'https://api-ryubotz.herokuapp.com',
    bri: 'http://brizas-api.herokuapp.com',
	vio: 'https://api.violetics.pw',
    cnf: 'https://api-alc.herokuapp.com',
    lzm: 'https://lzmods-api.xyz',
    alfa: 'https://api.zeeoneofc.xyz',
    ley: 'https://leyscoders-api.herokuapp.com',
    vio2: 'https://api.violetics.pw',
    vio3: 'https://api.violetics.pw',	
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'hdiiofficial', // apikey
    'https://hardianto.xyz': 'hardianto',
    'https://api.xteam.xyz': '5bd33b276d41d6b4',
    'https://api-ryubotz.herokuapp.com': 'RyuBotz',
    'http://brizas-api.herokuapp.com': 'brizaloka',
    'https://api.violetics.pw': 'beta',
    'https://api.zeeoneofc.xyz': 'V12',
    'https://api-alc.herokuapp.com': 'ConfuMods',
    'https://lzmods-api.xyz': 'DPO3y2ML',
    'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
    'https://api.violetics.pw': 'aa26-83b1-4f6c',
    'https://api.violetics.pw': '0567-17a1-1747',
}

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

// Owner & Premiums
global.owner = ['593991398786']
global.premium = ['593991398786']
global.ownername = 'CrlsOps^'
global.botname = '𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇'
global.footer = '𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇'
global.email = 'carlos.e.escobarmc@gmail.com'
global.ig = 'https://instagram.com/c4rlos_9e'
global.gracias = 'Copyright by Crls^'
global.region = 'Planet Equador '

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

//Sticker Name
global.packname = ''
global.author = ' Created By : Daddy - MD\n Owner : ī.am/𝙲𝚛𝚕𝚜ꪶ͢sєrꫂ⁩\n Instagram : @c4rl0s_9e\n Website : https://github.com/CarlosTwT'

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

//Documentos Falsos
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive' 

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

// Botones
global.linkbot = 'https://linkr.bio/KitziaBotMD'
global.tiktok = 'https://tiktok.com/@theprivmen'
global.myweb = 'https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ'
global.sc = 'https://github.com/CarlosTwT'
global.paypal = 'https://www.paypal.me/CarlosTwT'
//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

//session y prefijo
global.sessionName = 'qrcode'
global.prefijo = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

//mensajes 
global.mess = {
    success: '鉁? Listo',
    admin: 'Funciones especiales para el administrador del grupo!',
    botAdmin: 'Necesito ser administrado para tener acceso a esa función!',
    owner: 'Funciones especiales para el creador del bot',
    group: 'Funciones bloqueadas para uso privado\nusalo en un grupo!',
    private: 'Funciones solo validas para chat privado!',
    listo: 'Hecho',
    bot: 'Funciones especiales para el usuario con el n煤mero de bot',
    wait: 'Cargando...',
    error: 'Error 404 :/, api vencida',
    endLimit: 'Su limite diario ha expirado, el limite se restablecera cada 12 horas',
    endGLimit: 'Su limite diario de juego ha expirado, el limite se restablecera cada 12 horas',
}
global.limitawal = {
    premium: "Infinity",
    free: 15
}

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

// Thumb & Image random 
global.kitzia = { url: 'https://a.uguu.se/zwEGVJNF.mp4' }
global.thumb = fs.readFileSync('./media/imgmenu.jpg')
global.thumb2 = fs.readFileSync('./media/imgmenu.jpg')
global.pp_video = fs.readFileSync('./media/botvideo.mp4')
global.thumbpdf = fs.readFileSync('./media/pdfimg.jpg')

//|⬡════════════════════════════════════════════|❝ Ⓒ𝑫͢𝜟𝑫͢𝑫𝒀 𝜝𝛳͢𝑇™ ❞|═══════════════════════════════════════════⬡|//	

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
