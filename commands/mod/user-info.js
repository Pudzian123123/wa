const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
const prefix = (process.env.PREFIX);

module.exports = class UserInfoCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'user-info',
			aliases: [
				'u',
				'ui',
				'uinfo',
				'user'
			],
			group: 'mod',
			memberName: 'user-info',
			userPermissions: [
				'MANAGE_MESSAGES'
			],
			description: 'Grabsd the info of the mentioned user.',
			examples: [
				`Usage: ${prefix}[u]ser <user.mention>`,
				`Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
				`Note: Do not include the '<>' or '[]' tags in the command.`

			],
			guildOnly: true,

			args: [
				{
					key: 'text',
					prompt: 'Who would you like to snoop on?',
					type: 'user',
				},
			],
		})
	};

	async run(msg, args) {
		const userMention = msg.mentions.users.first() || msg.author

		let userinfo = {};
		userinfo.bot = userMention.bot
		userinfo.createdat = userMention.createdAt
		userinfo.discrim = userMention.discriminator
		userinfo.id = userMention.id
		userinfo.mfa = userMention.mfaEnabled
		userinfo.pre = userMention.premium
		userinfo.presen = userMention.presence
		userinfo.tag = userMention.tag
		userinfo.uname = userMention.username
		userinfo.verified = userMention.verified

		msg.reply(stripIndents`
		**❯ User Info**
		 • Username: ${userinfo.uname}
         • Bot: ${userinfo.bot}
		 • Created At: ${userinfo.createdat}
		 • Discriminator: ${userinfo.discrim}
		 • Client ID: ${userinfo.id}
		 • 2FA/MFA Enabled: ${userinfo.mfa}
		 • Paid Account: ${userinfo.pre}
		 • Presence: ${userinfo.presen}
		 • Client Tag: ${userinfo.tag}
		 • Verified: ${userinfo.verified}
         `).then().catch(console.error)
	};
};
