
const prefix = (process.env.PREFIX);
const twitch_url = (process.env.TWITCH_URL);
const invite_url = (process.env.INVITE_URL);
require('dotenv').config();

module.exports = (client) => {
    console.log(`Connected to Discord Client as ${client.user.tag}[${client.user.id}].`)
    console.log(`If you have any issues, you can contact the developers at ${invite_url}`)
    client.user.setActivity(`${prefix}help`, {
        type: "STREAMING",
        url: twitch_url
    })
};
