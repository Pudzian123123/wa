const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
const prefix = (process.env.PREFIX);
const broadcast_channel = (process.env.BROADCAST_CHANNEL_NAME);
require('dotenv').config();


module.exports = class BroadcastCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'broadcast',
      aliases: [
        'bcast',
        'bc'
      ],
      group: 'admin',
      memberName: 'broadcast',
      userPermissions: [
        'MANAGE_CHANNELS'
      ],
      description: 'Send a Broadcast to the broadcasts channel',
      examples: [
        `Usage: ${prefix}broadcast <message.content>`,
        `Details: '<>' flags indicate a required field. '[]' flags indicates an optional field.`,
        `Note: Do not include the '<>' or '[]' flags in the command.`
      ],
      args: [
        {
          key: 'text',
          prompt: 'What would you like the bot to announce?',
          type: 'string',
        },
      ],
    })
  };

  run(msg, { text }) {
    msg.guild.channels.cache
      .filter(channel => channel.name === broadcast_channel)
      .forEach((textChannel) =>
        textChannel.send(stripIndents`
        **❯ Notice**
         • Event: Announcement
         • Message: ${text}
         `).catch(console.error));
  };
};