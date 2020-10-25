const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
require('dotenv').config();
const prefix = (process.env.PREFIX);
const log_channel = (process.env.LOG_CHANNEL_NAME);

module.exports = class PruneAllCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pruneall',
            group: 'admin',
            aliases: [
                'fp',
                'forcep',
                'pall',
                'purge'
            ],
            memberName: 'pruneall',
            userPermissions: [
                'MANAGE_MESSAGES',
                'MANAGE_ROLES',
                'MANAGE_GUILD'
            ],
            description: 'Deletes all specified messages from the current channel, including user pins and bot messages.',
            examples: [
                `Usage: ${prefix}pruneall <1-99>`,
                `Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
                `Note: Do not include the '<>' or '[]' tags in the command.`
            ],
            guildOnly: true,

            args: [
                {
                    key: 'count',
                    prompt: 'How many messages do you want to delete?',
                    type: 'integer',
                    min: 1,
                    max: 99,
                    error: 'You can only delete 1 to 99 messages at a time.'
                }
            ]
        });
    }

    async run(msg, { count }) {

        if (!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return msg.reply('I need the permission `MANAGE_MESSAGES` for this to work.')

        msg.channel.bulkDelete(count).then(() => {
            msg.guild.channels.cache
                .filter(channel => channel.name === log_channel)
                .forEach((textChannel) =>
                    textChannel.send(stripIndents`
                    **❯ ModLog**
                     • Event: Prune All command logged
                     • Messages Deleted: ${count}
                     `).then().catch(console.error));
        });
    }
};