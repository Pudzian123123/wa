const
    { RichEmbed } = require('discord.js'),
    { color } = require('../config.json')
module.exports = {
    run: async (client,message,args) => {

      const
      lang = client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, (err, row) => {
        l = require(`../languages/lang.${row[0].lang}.json`),
        msg = l.ping.split('|')

      message.channel.send(new RichEmbed().setColor(color).setDescription(`>>> 🏓 - ${msg[0]} ${Math.floor(client.ping)}\n🎏 - ${msg[1]} ${client.pings[0]}`))

      })
  },
    cmd: {
      name: "ping",
      aliases: ["pings"],
      desc: "none",
      category: "info",
      usage: `%!ping`
    }
}
