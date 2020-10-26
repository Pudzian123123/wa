const
  { RichEmbed } = require('discord.js'),
  config = require('../config.json'),
  db = require('mysql')

module.exports = {
  run: async (client,message,args) => {
  const
    lang = client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, (err, row) => {
      l = require(`../languages/lang.${row[0].lang}.json`),
      msg = l.language.split('|')

    if(!args[0]) return message.channel.send(msg[0].replace('%l',`\`\`\`${msg[2]}\n${msg[3]}\`\`\``))
    if(args[0].toLowerCase() !== 'en' && args[0].toLowerCase() !== 'ru') return message.channel.send(msg[1].replace('%r',args[0]))
    message.react('✅')
    client.connection.query(`UPDATE guild SET lang = '${args[0]}' WHERE id = ${message.guild.id}`)

  })
},
  cmd: {
    name: "language",
    aliases: ['lang'],
    category: "guild-settings",
    desc: "none",
    usage: `%!language <ru/en>`
 }
}
