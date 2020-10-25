const Commando = require('discord.js-commando');
const prefix = (process.env.PREFIX);

module.exports = class SplitCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'split',
			group: 'util',
			memberName: 'split',
			description: 'Sends split messages with a specific total length.',
			details: 'This command is for testing split messages. The length must be at least 1.',
			examples: [
				`${prefix}split`
			],

			args: [
				{
					key: 'length',
					prompt: 'How many characters long would you like the message to be?',
					type: 'integer',
					validate: val => parseInt(val) >= 1
				}
			]
		});
	}

	async run(msg, args) {
		let content = '';
		for(let i = 0; i < args.length; i++) content += `${i % 500 === 0 ? '\n' : ''}a`;
		return [await msg.reply(content, { split: true })].catch(console.error);
	}
};
