const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
const prefix = (process.env.PREFIX);
const announce_channel = (process.env.ANNOUNCE_CHANNEL_NAME);
require('dotenv').config();

module.exports = class AnnounceCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'announce',
      aliases: [
        'ann',
        'a'
      ],
      group: 'mod',
      memberName: 'announce',
      userPermissions: [
        'MANAGE_MESSAGES'
      ],
      description: 'Send an announcement to the announcements channel',
      examples: [
        `Usage: ${prefix}[ann]ounce <message.content>`,
        `Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
        `Note: Do not include the '<>' or '[]' tags in the command.`

      ],
      guildOnly: true,

      args: [
        {
          key: 'text',
          prompt: 'What would you like the bot to announce?',
          type: 'string',
        },
      ],
    })
  };

  async run(msg, { text }) {

    msg.guild.channels.cache
      .filter(channel => channel.name === announce_channel)
      .forEach((textChannel) =>
        textChannel.send(stripIndents`
        **❯ Notice**
         • Event: Announcement
         • Message: ${text}
         `).catch(console.error));
  };
};