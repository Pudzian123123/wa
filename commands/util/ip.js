const stripIndents = require('common-tags').stripIndents;
const Commando = require('discord.js-commando');
const prefix = (process.env.PREFIX);
const server_ip = (process.env.MC_IP);
const server_port = (process.env.MC_PORT);
const server_name = (process.env.MC_NAME);
const server_version = (process.env.MC_VERSION);
const server_edition = (process.env.MC_EDITION);
require('dotenv').config;

module.exports = class IpCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "ip",
            group: 'util',
            aliases: [
                `server`
            ],
            memberName: 'ip',
            userPermissions: [
                'SEND_MESSAGES'
            ],
            description: `Returns the server Address for ${server_name}`,
            examples: [

                `Usage: ${prefix}ip`,
                `Details: '<>' specifies a required argument. '[]' specifies an optional argument.`,
                `Note: Do not include the '<>' or '[]' tags in the command.`
            ]
        })
    }
    async run(msg) {
        msg.channel.send(stripIndents`
                **❯ Minecraft Server Info**
                 • Name: ${server_name}
                 • IP: ${server_ip}
                 • Port: ${server_port}
                 • Version: ${server_version}
                 • Edition: ${server_edition}
                 `).catch(console.error);
    }
};
