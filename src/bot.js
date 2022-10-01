require('dotenv').config();
const {
    Client,
    Discord,
    Intents,
    ClientVoiceManager,
    Collection,
    MessageAttachment
} = require('discord.js');
const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES)
const client = new Client({
    intents: myIntents
});

client.on('ready', () => (
    console.log('project is running...')
));

client.once('ready', () => {
    client.user.setActivity('ㅤ', {
        type: 'STREAMING',
        url: 'https://www.twitch.tv/hentai'
    });
});



client.on("messageCreate", function(message) {
    if (message.author.bot === true) {
        return
    };

    if (message.content.toString().startsWith("!askben")) {
        console.log("askben")
        const bens = [
            'https://tenor.com/view/talking-ben-ben-hang-up-bye-goodbye-gif-24987183',
            'https://tenor.com/view/ugh-ben-gif-25012261',
            'https://tenor.com/view/talking-ben-ben-gif-24964396',
            'https://tenor.com/view/talking-ben-gif-25223958',
            'https://tenor.com/view/talking-ben-gif-25223958'
        ];

        const randomIndex = Math.floor(Math.random() * bens.length);
        console.log(randomIndex)
        message.channel.send(bens[randomIndex]);

        return;
    };
});

client.on("messageCreate", function(message) {
    if (message.author.bot === true) {
        return;
    };
    let user = message.mentions.users.at(0);
    if (user === undefined) {
        user = message.author
    };
    if (message.content.toString().startsWith("!avatar")) {
        console.log("avatar")

        message.channel.send(user.avatarURL({
            dynamic: true,
            size: 2048,
            format: "png"
        }))

        return;
    };
});

(async () => {
    client.login(process.env.token);

})();