let config = require('../config.json')

module.exports = async (client,guild) => {
    console.log(`Joined: ${guild.name}`)
    client.connection.query(`INSERT INTO guild(id,prefix,lang) VALUES (${guild.id},'..','en')`)
}
