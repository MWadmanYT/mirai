exports.run = (client, message) => {
    const Discord = require("discord.js");
    try {
        const embed = new Discord.RichEmbed().setImage("https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/c5/a1/9d/c5a19dad-689b-0bdc-d303-82bbfa5a0ab1/source/512x512bb.jpg").setColor("ffda8b");
        message.channel.send(embed);
        console.log('Команда "ррар" использована пользователем ' + message.author.username + '. Результат - успешно');
    } catch(err) {
        client.fetchUser('412338841651904516').then(user => user.send(`\`\`\`javascript\n${err.stack}\`\`\``));
    }
}
exports.help = (client, message) => {
    message.channel.send(`**Информация о команде "ppap"**\n\nФан-команда, показывающая мем с ppap.\nЧтобы увидеть картинку, напишите \`-ppap\``)
}
