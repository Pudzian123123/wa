const
  { RichEmbed } = require('discord.js'),
  config = require('../config.json')

module.exports = {
    run: async (client,message,args) => {

      client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, (err, row) => {
      const
        pref = row[0].prefix
        lang = row[0].lang
        l = require(`../languages/lang.${lang}.json`),
        msg = l.help.split('|')
function list (cat, cname){
    return `${cname}: ${client.commands.filter(cmd => cmd.cmd.category == cat).map(cmd => `\`${cmd.cmd.name}\``).join(', ')}`
    }
    if(!args[0]) return message.channel.send(`>>> ${list("guild-settings", "**Guild-Settings**")}\n${list("info", "**Info**")}\n${list("eco", "**Ecomony**")}`)
    if(args[0]){
      let command = args[0]
      if(client.commands.has(command)){
        let a  = client.commands.get(command)
           if(!a.cmd.description && !a.cmd.usage) return message.react('❌')
                message.channel.send(`\`\`\`${msg[0]} ${a.cmd.name}\n${msg[1]} ${a.cmd.aliases}\n${msg[2]} ${a.cmd.usage.replace('%!',pref)}\n${msg[3]} ${a.cmd.desc}\n${msg[4]} ${a.cmd.category}\`\`\``)
     }
   }
 })
},
  cmd: {
    name: "help",
    aliases: ["h"],
    category: "info",
    desc: "none",
    usage: `%!help [command]`
 }
}
