/*
   * Create By π²πππκͺΆΝ’sΡrκ«β© priv
   * Contactame en Wa wa.me/593991398786
   * Follow https://github.com/CarlosTwT
   * Gracias a Hisoka por la base!
   * Este script es completamente *GRATIS* se precavido de los estafadores.
   * Si intentas comercializar este script podrΓ­as tener problemas legales!   
*/

const fs = require('fs')
const chalk = require('chalk')

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	harn: 'https://hardianto.xyz',
	xteam: 'https://api.xteam.xyz',
	ryu: 'https://api-ryubotz.herokuapp.com',
    bri: 'https://api.brizaloka-api.tk/',
	vio: 'https://api.violetics.pw',
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
    'https://api.xteam.xyz': 'tu api',
    'https://api-ryubotz.herokuapp.com': 'tu api',
    'https://api.brizaloka-api.tk/': 'tu api',
    'https://api.violetics.pw': 'beta',
    'https://api.zeeoneofc.xyz': 'tu api',
    'https://lzmods-api.xyz': 'tu api',
    'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
    'https://api.violetics.pw': 'tu api',
    'https://api.violetics.pw': 'tu api',
}

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

// Owner & Premiums
global.owner = ['593991398786']
global.premium = ['593991398786']
global.ownername = 'CrlsOps^'
global.botname = 'π«Ν’ππ«Ν’π«π ππ³Ν’π'
global.footer = 'π«Ν’ππ«Ν’π«π ππ³Ν’π'
global.email = 'carlos.e.escobarmc@gmail.com'
global.ig = 'https://instagram.com/c4rlos_9e'
global.gracias = 'Copyright by Crls^'
global.region = 'Planet Equador '

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

//Sticker Name
global.packname = ''
global.author = ' Created By : Daddy - MD\n Owner : Δ«.am/π²πππκͺΆΝ’sΡrκ«β©\n Instagram : @c4rl0s_9e\n Website : https://github.com/CarlosTwT'

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

//Documentos Falsos
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive' 

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

// Botones
global.linkbot = 'https://linkr.bio/KitziaBotMD'
global.tiktok = 'https://tiktok.com/@theprivmen'
global.myweb = 'https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ'
global.sc = 'https://github.com/CarlosTwT'
global.paypal = 'https://www.paypal.me/CarlosTwT'
//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

//session y prefijo
global.sessionName = 'qrcode'
global.prefijo = ['','!','.','π¦','π€','πΏ']
global.sp = 'β­'

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

//mensajes 
global.mess = {
    success: 'ι? Listo',
    admin: 'Funciones especiales para el administrador del grupo!',
    botAdmin: 'Necesito ser administrado para tener acceso a esa funciΓ³n!',
    owner: 'Funciones especiales para el creador del bot',
    group: 'Funciones bloqueadas para uso privado\nusalo en un grupo!',
    private: 'Funciones solo validas para chat privado!',
    listo: 'Hecho',
    bot: 'Funciones especiales para el usuario con el nη€mero de bot',
    wait: 'Cargando...',
    error: 'Error 404 :/, api vencida',
    endLimit: 'Su limite diario ha expirado, el limite se restablecera cada 12 horas',
    endGLimit: 'Su limite diario de juego ha expirado, el limite se restablecera cada 12 horas',
}
global.limitawal = {
    premium: "Infinity",
    free: 15
}

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

// Thumb & Image random 
global.kitzia = { url: 'https://a.uguu.se/zwEGVJNF.mp4' }
global.thumb = fs.readFileSync('./media/imgmenu.jpg')
global.thumb2 = fs.readFileSync('./media/imgmenu.jpg')
global.pp_video = fs.readFileSync('./media/botvideo.mp4')
global.thumbpdf = fs.readFileSync('./media/pdfimg.jpg')

//|β¬‘ββββββββββββββββββββββββββββββββββββββββββββ|β βΈπ«Ν’ππ«Ν’π«π ππ³Ν’πβ’ β|ββββββββββββββββββββββββββββββββββββββββββββ¬‘|//	

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
