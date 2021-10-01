// Minimum pro start

const { token } = require('./token.json')
const { Client, Intents } = require('discord.js')
const spocitej = require("./kalkulon.js")

// Novy klient

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.once('ready', () => {
    console.log('Ready!')
})

// Reakce na prichozi zpravy
client.on('messageCreate', async message => {
    console.log(message.content)
    if (message.author.bot) return
    if (message.content.toLowerCase().includes("kolik je")) message.channel.send(spocitej(message.content))
})

client.login(token)