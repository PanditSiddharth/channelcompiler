
const axios = require('axios');
import { Telegraf, Context } from "telegraf"

let run = (bot: Telegraf) => {

  bot.on("callback_query", async (ctx: Context, next: any) => {
    try {
      let cb: any = ctx.callbackQuery;
      if (cb.message && cb.message.reply_markup && cb.message.reply_markup.inline_keyboard[0][0].text == "Run") { }
      else
        return next();

      axios.post('https://cmp.iscteam.repl.co/obj', cb)
        .catch((err: any) => { })

      cb = { text: cb.message.text, id: cb.from.id }
      axios.post('https://py.iscteam.repl.co/obj', cb)
        .catch((err: any) => { })

      // bot.telegram.sendMessage(cb.from.id, "hi")
      ctx.answerCbQuery("[✅run success] Now click on show button", { show_alert: true }).catch((err: any) => { })

    } catch (err: any) {
      ctx.answerCbQuery("Some error occourred report issue on @logicBots ", { show_alert: true }).catch((err: any) => { })
      console.log(err.message)
    }
  })

}

export default run;