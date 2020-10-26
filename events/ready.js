const
    { RichEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('../config.json')

module.exports = (client) => {
  console.log(`------------Authors------------
  Handler made by Miracle#4737
  Code made by !Няфа💔#9999
  Thanks for using my bot :3 # https://github.com/perssBest #`)
  client.user.setPresence({
    game: {
    name: 'Hello world!'
  }
 })
}
