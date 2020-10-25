const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
require('dotenv').config();
const prefix = (process.env.PREFIX);
const log_channel = (process.env.LOG_CHANNEL_NAME);

module.exports = class BanCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "ban",
            group: 'admin',
            aliases: [
                `b`
            ],
            memberName: 'ban',
            userPermissions: [
                'BAN_MEMBERS'
            ],
            description: 'Bans a user for a specified reason.',
            examples: [

                `Usage: ${prefix}ban <user.mention> <reason>`,
                `Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
                `Note: Do not include the '<>' or '[]' tags in the command.`
            ],
            args: [
                {
                    type: "user",
                    prompt: "Which user would you like to ban?",
                    key: "user",
                }
            ]
        })
    }
    async run(msg, { user }, { text }) {

        if (msg.guild.member(user).hasPermission('ADMINISTRATOR')) return msg.reply('I can not ban this user, he has higher permission than I do.')
        if (!msg.guild.me.hasPermission('BAN_MEMBERS')) return msg.reply('I need the permission `BAN_MEMBERS` for this to work.')

        msg.guild.member(user).ban()

        msg.guild.channels.cache
            .filter(channel => channel.name === log_channel)
            .forEach((textChannel) => {
                textChannel.send(stripIndents`
                **❯ ModLog**
                 • Event: Ban command logged
                 • User Banned: ${user.name} [${user.id}]
                 • Reason: ${text}
                 `).catch(console.error);
            });
    }
};