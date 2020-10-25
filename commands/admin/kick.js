const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
require('dotenv').config();
const prefix = (process.env.PREFIX);
const log_channel = (process.env.LOG_CHANNEL_NAME);

module.exports = class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "kick",
            aliases: [
                'k'
            ],
            group: 'admin',
            memberName: 'kick',
            userPermissions: [
                'KICK_MEMBERS'
            ],
            description: 'Kicks a user for a specified reason.',
            examples: [
                `Usage: ${prefix}kick <user.mention> <reason>`,
                `Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
                `Note: Do not include the '<>' or '[]' tags in the command.`

            ],
            guildOnly: true,

            args: [
                {
                    type: "user",
                    prompt: "Which user would you like to kick?",
                    key: "user",
                }
            ]
        })
    }
    async run(msg, { user }, { text }) {

        if (msg.guild.member(user).hasPermission('ADMINISTRATOR')) return msg.reply('I can not kick this user, he has higher permission than I do.')
        if (!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply('I need the permission `KICK_MEMBERS` for this to work.')

        msg.guild.member(user).kick()

        msg.guild.channels.cache
            .filter(channel => channel.name === log_channel)
            .forEach((textChannel) =>
                textChannel.send(stripIndents`
                **❯ ModLog**
                 • Event: Kick command logged
                 • User Kicked: ${user.name} [${user.id}]
                 • Reason: ${text}
                 `).catch(console.error));
    };
};