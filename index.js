const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const fs = require('fs');
const discord_token = (process.env.TOKEN);
const server_invite = (process.env.INVITE_URL);
const owner_id = (process.env.OWNER_ID);
const prefix = (process.env.PREFIX);
require('dotenv').config();
const client = new CommandoClient({
    commandPrefix: prefix,
    unknownCommandResponse: false,
    disableMentions: 'everyone',
    owner: owner_id,
    invite: server_invite
})

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Administration'],
        ['mod', 'Moderation'],
        ['fun', 'Fun'],
        ['misc', 'Miscellanious'],
        ['util', 'Utility']

    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'))


fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
});

client.on('error', console.error)
client.login(discord_token);