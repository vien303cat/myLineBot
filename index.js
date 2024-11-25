import 'dotenv/config'
import linebot from 'linebot'
import pokeGO from './commands/pokemon.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  console.log(Number(event.message.text))
  console.log(event.message)

  if (event.message.type === 'number') {
    pokeGO(event.message.text, event)
  } else {
    event.reply('查詢失敗:' + event.message.text)
  }
})

bot.on('postback', event => {
  event.reply('postback: ' + event.postback.data)
})

bot.listen('/', 3000 || process.env.PORT, () => {
  console.log('機器人啟動')
})
