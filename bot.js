/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;
const fetch = require('node-fetch')

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}

setInterval(async () => {
  await fetch('https://acoustic-elderly-sundae.glitch.me').then(console.log('Pinged!'))
}, 180000)