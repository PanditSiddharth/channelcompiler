import { Telegraf, Context } from "telegraf"

let addButton = (bot: Telegraf) => {
  bot.on("channel_post", async (ctx: Context) => {
    try {
      let cp: any = ctx.channelPost

      let a = (m: any) => {
        if (cp.text.startsWith(m)) {
          cp.text = cp.text.replace(m, "")
          return true
        }
        return false
      }

      let cmp: string = "";
      let cmpl: string = "";

      if (a("/js"))
        cmp = "js"
      else if (a("/py")) {
        cmp = "py"
        cmpl = "py"
      }
      else if (a("/jv")) {
        cmp = "jv"
        cmpl = "java"
      }
      else if (a("/cc")) {
        cmp = "code";
        cmpl = "c";
      }
      else if (a("/cpp"))
        cmp = "cpp"
      else if (a("/go"))
        cmp = "go"
      else if (a("/ts"))
        cmp = "ts"

      if (!cmp)
        return
      else if (!cmpl)
        cmpl = cmp
let cmdcm = "\\/" + cmp

     let cparr: string[] = cp.text.split(cmdcm)
      
      if (cparr.length > 0) {
        for(let cp of cparr){
          let ab = {text: cp}
        loop(ab)
        await sleep(5000)
      }
      }
      

async function loop(cp: any){
      ctx.deleteMessage().catch((err: any) => { })

      let firstLine: any = cp.text.trim().split('\n')[0].trim();
      if (firstLine.match(/^\/\/|^#/)) {
        cp.text = cp.text.trim().replace(firstLine, "")
      }

      cp.text = cp.text.replace(/([\s\S]*)/m, (match: any, first: any) => {

        return "```" + cmpl + "\n" + first.trim() + "```"
      }).replace(/(\\)/g, "\\\\")

      firstLine = firstLine
.replace(/(\\)/g, "\\\\")
.replace(/[_*[\]()~`>+=|{}.!\-]/g, '\\$&');

      if (firstLine.match(/^(\/\/|#)/))
        cp.text = "**" + firstLine.replace(/[#]/g, "\\$&") + "**\n" + cp.text.trim();
      


      if (cmp == "py") {
        ctx.reply(cp.text, {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Run", callback_data: "" + cmp },
              { text: "show", url: "t.me/python_0bot?start=run" }]
            ]
          },
          parse_mode: "MarkdownV2"
        }).catch((err: any) => { console.log(err) })

      } else {
        ctx.reply(cp.text, {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Run", callback_data: "" + cmp },
              { text: "show", url: "t.me/compiler0bot?start=run" }]
            ]
          },
          parse_mode: "MarkdownV2"
        }).catch((err: any) => { console.log(err) })
      }
}
    } catch (error: any) { }

  })
}

export default addButton;

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
