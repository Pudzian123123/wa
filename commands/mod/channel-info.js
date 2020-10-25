const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
const prefix = (process.env.PREFIX);

module.exports = class ChannelCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'channel-info',
			aliases: [
				'ch',
				'ci',
				'cinfo',
				'channel'
			],
			group: 'mod',
			memberName: 'channel-info',
			userPermissions: [
				'MANAGE_MESSAGES'
			],
			description: 'Grabs the info of the mentioned channel.',
			examples: [
				`Usage: ${prefix}[ch]annel-info <channel.mention>`,
				`Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
				`Note: Do not include the '<>' or '[]' tags in the command.`

			],
			guildOnly: true,

			args: [
				{
					key: 'text',
					prompt: 'What channel would you like to snoop on?',
					type: 'channel',
				},
			],
		})
	};

	async run(msg, args) {

		msg.reply(stripIndents`
		**❯ Channel Info**
		 • Channel Name: ${msg.mentions.channels.first().id}
		 • Channel ID: ${msg.mentions.channels.first().name}
         `).then().catch(console.error);
	};
};
