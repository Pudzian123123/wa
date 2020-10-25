const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const prefix = (process.env.PREFIX);

module.exports = class AvatarCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            aliases: [
                "pfp",
                "ava"
            ],
            group: 'misc',
            memberName: 'avatar',
            description: 'Sends the avatar of a user.',
            examples: [
                `Usage: ${prefix}avatar [member.mention]`,
                `Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
                `Note: Do not include the '<>' or '[]' tags in the command.`
            ],
            guildOnly: true,

            args: [
                {
                    type: "user",
                    prompt: "Which user would you like to get the avatar of?",
                    key: "user",
                    default: msg => msg.author
                }
            ]
        })
    }
    async run(msg, { user }) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`${user.tag}s profile picture!`)
            .setURL(user.displayAvatarURL())
            .setImage(user.displayAvatarURL())
            .setColor("RANDOM")
        return msg.reply(embed).catch(console.error);
    }
};