const { banner,success, Sukses,  } = require('./lib/simple')
let chalk = require("chalk")
const TelegramBot = require('node-telegram-bot-api');
let { Configuration, OpenAIApi } = require("openai")
const bot_token = 'Token Bot Tele'; 
const configuration = new Configuration({
    apiKey: "Apikey OpenAI",
  }); 

const bot = new TelegramBot(bot_token, { polling: true });
console.log(chalk.yellow('CONNECTED TO TOKEN : ')+' '+set.token)
console.log(banner.string)
Sukses('2', 'Connecting...')
setTimeout( () => {
success('2', 'Connected')
console.log(chalk.blueBright('[ BOT STARTED ]'))
}, 3000)

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  if (!message) return;

  try {
    const openai = new OpenAIApi(configuration);
        const response = await openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: message }],
            });
        var answer = response.data.choices[0].message.content

    bot.sendMessage(chatId, answer);
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Maaf, terjadi kesalahan saat memproses permintaan Anda.');
  }
});
